import { useEffect } from "react";
import { productListServices } from "@/services";
import { useProductListStore } from "@/stores";
import type { ProductList } from "@/interfaces";

const PRODUCTS_PER_PAGE = 30;

interface UsePaginatedProductsOptions {
    page: number;
    search?: string;
    category?: string;
    sortBy?: string;
    order?: "asc" | "desc";
}

export const usePaginatedProducts = ({
    page,
    category,
    search,
    sortBy = "title",
    order = "asc",
}: UsePaginatedProductsOptions) => {
    const productsList = useProductListStore((state) => state.productsList);
    const setProductList = useProductListStore((state) => state.setProductList);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const skip = (page - 1) * PRODUCTS_PER_PAGE;
                let data: ProductList;

                if (search) {
                    data = await productListServices.getAllProductsBySearch(
                        search,
                        0,
                        0,
                        sortBy,
                        order
                    );

                    if (category) {
                        const filtered = data.products.filter((p) => p.category === category);
                        data = {
                            ...data,
                            products: filtered.slice(skip, skip + PRODUCTS_PER_PAGE),
                            total: filtered.length,
                            skip,
                            limit: PRODUCTS_PER_PAGE,
                        };
                    } else {
                        data = {
                            ...data,
                            products: data.products.slice(skip, skip + PRODUCTS_PER_PAGE),
                            skip,
                            limit: PRODUCTS_PER_PAGE,
                        };
                    }
                } else if (category) {
                    data = await productListServices.getAllProductsByCategory(
                        category,
                        PRODUCTS_PER_PAGE,
                        skip,
                        sortBy,
                        order
                    );
                } else {
                    data = await productListServices.getAllProducts(
                        PRODUCTS_PER_PAGE,
                        skip,
                        sortBy,
                        order
                    );
                }

                setProductList(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            }
        }

        fetchProducts();
    }, [page, search, category, sortBy, order, setProductList]);

    return productsList;
};

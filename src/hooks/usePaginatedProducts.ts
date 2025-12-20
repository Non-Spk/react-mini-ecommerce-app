import { useEffect } from "react";
import { productListServices } from "@/services";
import { useProductListStore } from "@/stores";
import type { ProductList } from "@/interfaces";

const PRODUCTS_PER_PAGE = 30;

interface UsePaginatedProductsOptions {
    page: number;
    category?: string;
    sortBy?: string;
    order?: "asc" | "desc";
}

export const usePaginatedProducts = ({
    page,
    category,
    sortBy = "title",
    order = "asc",
}: UsePaginatedProductsOptions) => {
    const productsList = useProductListStore(state => state.productsList);
    const setProductList = useProductListStore(state => state.setProductList);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const skip = (page - 1) * PRODUCTS_PER_PAGE;
                let data: ProductList;
                if (category) {
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
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, [page, category, sortBy, order, setProductList]);

    return productsList;
};

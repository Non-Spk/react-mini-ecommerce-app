import { useEffect } from "react";
import { productListServices } from "@/services";
import { useProductListStore } from "@/stores";
import type { ProductList } from "@/interfaces";

const PRODUCTS_PER_PAGE = 30;

export const usePaginatedProducts = (page: number) => {
    const productsList = useProductListStore(state => state.productsList);
    const setProductList = useProductListStore(state => state.setProductList);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const skip = (page - 1) * PRODUCTS_PER_PAGE;
                const data: ProductList = await productListServices.getAllProducts(
                    PRODUCTS_PER_PAGE,
                    skip
                );
                setProductList(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }

        fetchProducts();
    }, [page, setProductList]);

    return productsList;
};

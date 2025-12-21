import { useState, useEffect } from "react";
import { usePaginatedProducts } from "./usePaginatedProducts";
import { useProductListStore } from "@/stores";

export function useHomePageProducts() {
    const storeProductsList = useProductListStore((state) => state.productsList);
    const setStoreProductsList = useProductListStore((state) => state.setProductList);

    const searchTerm = useProductListStore((state) => state.searchTerm);
    const setSearchTerm = useProductListStore((state) => state.setSearchTerm);

    const category = useProductListStore((state) => state.category);
    const setCategory = useProductListStore((state) => state.setCategory);

    const [page, setPage] = useState(1);

    const handleSearch = (query: string) => {
        setSearchTerm(query);
        setPage(1);
    };

    const handleSetCategory = (newCategory?: string) => {
        setCategory(newCategory);
        setPage(1);
    };

    const productsList = usePaginatedProducts({ page, category, search: searchTerm });

    useEffect(() => {
        setStoreProductsList(productsList);
    }, [productsList, setStoreProductsList]);

    const maxPage = Math.ceil(productsList.total / 30) || 1;

    return {
        search: searchTerm,
        category,
        page,
        productsList: storeProductsList,
        maxPage,
        setPage,
        handleSearch,
        handleSetCategory,
    };
}

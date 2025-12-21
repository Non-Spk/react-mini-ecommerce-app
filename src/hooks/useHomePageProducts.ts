import { useState, useEffect } from "react";
import { useProductListStore } from "@/stores/productStore";
import { usePaginatedProducts } from "@/hooks/usePaginatedProducts";

const PRODUCTS_PER_PAGE = 30;

export function useHomePageProducts() {
    const [search, setSearch] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [page, setPage] = useState(1);
    const storeProductsList = useProductListStore((state) => state.productsList);
    const setStoreProductsList = useProductListStore((state) => state.setProductList);
    const handleSetCategory = (newCategory?: string) => {
        setCategory(newCategory);
        setPage(1);
    };
    const handleSearch = (query: string) => {
        setSearch(query);
        setPage(1);
    };
    const productsList = usePaginatedProducts({ page, category, search });
    useEffect(() => {
        setStoreProductsList(productsList);
    }, [productsList, setStoreProductsList]);
    const maxPage = Math.ceil(productsList.total / PRODUCTS_PER_PAGE);
    return {
        search,
        category,
        page,
        productsList: storeProductsList,
        maxPage,
        setPage,
        handleSearch,
        handleSetCategory,
    };
}

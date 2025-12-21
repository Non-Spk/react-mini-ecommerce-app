import { useState } from "react";
import { usePaginatedProducts } from "@/hooks/usePaginatedProducts";

const PRODUCTS_PER_PAGE = 30;

export function useHomePageProducts() {
    const [search, setSearch] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [page, setPage] = useState(1);

    const handleSetCategory = (newCategory?: string) => {
        setCategory(newCategory);
        setPage(1);
    };

    const handleSearch = (query: string) => {
        setSearch(query);
        setPage(1);
    };

    const productsList = usePaginatedProducts({ page, category, search });
    const maxPage = Math.ceil(productsList.total / PRODUCTS_PER_PAGE);

    return {
        search,
        category,
        page,
        productsList,
        maxPage,
        setPage,
        handleSearch,
        handleSetCategory,
    };
}

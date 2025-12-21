import { useState } from "react";
import SideBar from "@/components/SideBar";
import ProductGallery from "@/components/ProductGallery";
import { usePaginatedProducts } from "@/hooks/usePaginatedProducts";

const PRODUCTS_PER_PAGE = 30;

export default function HomePage() {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [category, setCategory] = useState<string | undefined>(undefined);
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

    return (
        <div>
            <SideBar onSelectCategory={handleSetCategory} />

            <input
                type="text"
                placeholder="Search products..."
                value={search ?? ""}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <h1>Products - Page {page} of {maxPage}</h1>

            <ProductGallery products={productsList.products} />

            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
            <button onClick={() => setPage(p => p + 1)} disabled={page >= maxPage}>Next</button>
        </div>
    );
}

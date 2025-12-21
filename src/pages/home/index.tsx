import SideBar from "@/components/SideBar";
import ProductGallery from "@/components/ProductGallery";
import { useHomePageProducts } from "@/hooks";

export default function HomePage() {
    const {
        search, page, productsList, maxPage,
        handleSearch, handleSetCategory, setPage
    } = useHomePageProducts();

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

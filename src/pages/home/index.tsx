// src/pages/home/index.tsx
import SideBar from "@/components/SideBar";
import ProductGallery from "@/components/ProductGallery";
import { useHomePageProducts } from "@/hooks";
import Navbar from "@/components/NavBar";
import Pagination from "@/components/Pagination";

export default function HomePage() {
    const {
        page,
        productsList,
        maxPage,
        handleSetCategory,
        setPage,
    } = useHomePageProducts();

    return (
        <div className="min-h-screen flex flex-col bg-(--background) text-(--text)">
            <Navbar />
            <section className="flex flex-1">
                <SideBar onSelectCategory={handleSetCategory} />
                <div className="flex-1 p-4">
                    <ProductGallery products={productsList.products} />
                    <Pagination
                        page={page}
                        maxPage={maxPage}
                        onPrev={() => setPage((p) => Math.max(1, p - 1))}
                        onNext={() => setPage((p) => p + 1)}
                    />
                </div>
            </section>
        </div>
    );
}

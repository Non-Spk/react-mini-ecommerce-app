import SideBar from "@/components/SideBar";
import ProductGallery from "@/components/ProductGallery";
import { useHomePageProducts } from "@/hooks";
import Navbar from "@/components/NavBar";
import Pagination from "@/components/Pagination";

export default function HomePage() {
    const {
        category,
        page,
        productsList,
        maxPage,
        handleSetCategory,
        setPage,
    } = useHomePageProducts(); // ไม่ต้องส่ง initialSearch

    return (
        <div className="min-h-screen flex flex-col bg-(--background) text-(--text)">
            <Navbar />
            <section className="flex flex-1">
                <SideBar
                    selectedCategory={category} // ส่ง category ปัจจุบัน
                    onSelectCategory={handleSetCategory}
                />
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

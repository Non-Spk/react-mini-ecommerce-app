import SideBar from "@/components/SideBar";
import ProductGallery from "@/components/ProductGallery";
import { useHomePageProducts } from "@/hooks";
import Navbar from "@/components/NavBar";

export default function HomePage() {
    const {
        page, productsList, maxPage,
        handleSetCategory, setPage
    } = useHomePageProducts();

    return (
        <div>
            <Navbar />
            <section className='flex flex-1'>
                <SideBar onSelectCategory={handleSetCategory} />
                <h1>Products - Page {page} of {maxPage}</h1>
                <ProductGallery products={productsList.products} />
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
                <button onClick={() => setPage(p => p + 1)} disabled={page >= maxPage}>Next</button>
            </section>
        </div>
    );
}

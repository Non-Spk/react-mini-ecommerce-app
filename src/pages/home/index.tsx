import SideBar from "@/components/SideBar";
import HomeLayout from "@/components/layouts/HomeLayout";
import ProductSection from "@/components/ProductSection";
import { useHomePageProducts } from "@/hooks";

export default function HomePage() {
    const { category, page, productsList, maxPage, handleSetCategory, setPage } =
        useHomePageProducts();

    return (
        <HomeLayout>
            <SideBar selectedCategory={category} onSelectCategory={handleSetCategory} />
            <ProductSection
                products={productsList.products}
                page={page}
                maxPage={maxPage}
                setPage={(newPage) => setPage(newPage)}
            />
        </HomeLayout>
    );
}

import ProductGallery from "@/components/ProductGallery";
import Pagination from "@/components/Pagination";
import type { ProductItem } from "@/interfaces";

type Props = {
    products: ProductItem[];
    page: number;
    maxPage: number;
    setPage: (page: number) => void;
};

export default function ProductSection({ products, page, maxPage, setPage }: Props) {
    return (
        <div className="flex-1 p-4">
            <ProductGallery products={products} />
            <Pagination
                page={page}
                maxPage={maxPage}
                onPrev={() => setPage(Math.max(1, page - 1))}
                onNext={() => setPage(page + 1)}
            />
        </div>
    );
}

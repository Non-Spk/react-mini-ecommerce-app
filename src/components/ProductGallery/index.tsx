import type { ProductItem } from "@/interfaces/product";
import ProductCard from "@/components/ProductCard";

type Props = {
    products: ProductItem[];
};

export default function ProductGallery({ products }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}

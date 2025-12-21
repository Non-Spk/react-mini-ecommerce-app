import type { ProductItem } from "@/interfaces/product";
import ProductCard from "@/components/ProductCard";

type Props = {
    products: ProductItem[];
};

export default function ProductGallery({ products }: Props) {
    return (
        <ul>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </ul>
    );
}
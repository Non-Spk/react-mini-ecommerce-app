import ProductDetailView from "@/components/ProductDetailView";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";
import type { ProductItem } from "@/interfaces";

type Props = {
    product: ProductItem;
    quantity: number;
    setQuantity: (q: number) => void;
    handleAddToCart: () => void;
};

export default function ProductDetailMain({ product, quantity, setQuantity, handleAddToCart }: Props) {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            {product.images?.[0] && (
                <div className="flex-1 flex justify-center">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            )}

            {/* Info */}
            <div className="flex-1 flex flex-col gap-4">
                <ProductDetailView product={product} />

                {/* Rating */}
                {product.rating !== undefined && (
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-semibold">
                            {Array.from({ length: 5 }, (_, i) => (i < Math.round(product.rating || 0) ? "★" : "☆")).join("")}
                        </span>
                        <span className="text-(--text-secondary)">({product.rating})</span>
                    </div>
                )}

                {/* Quantity + Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <QuantitySelector quantity={quantity} onChange={setQuantity} />
                    <AddToCartButton onAdd={handleAddToCart} />
                </div>
            </div>
        </div>
    );
}

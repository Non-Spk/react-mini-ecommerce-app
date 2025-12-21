import ProductDetailView from "@/components/ProductDetailView";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";
import BackToHomeButton from "@/components/BackToHomeButton";
import Navbar from "@/components/NavBar";
import { useProductDetailWithCart } from "@/hooks";

export default function ProductDetailPage() {
    const { product, loading, error, quantity, setQuantity, handleAddToCart } =
        useProductDetailWithCart();

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error || !product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div>

            <Navbar />
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-8">
                {/* Layout: image + info */}
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
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < Math.round(product.rating || 0) ? "★" : "☆"
                                    ).join("")}
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

                {/* Back Button */}
                <div className="flex justify-start">
                    <BackToHomeButton />
                </div>
            </div>
        </div>
    );
}

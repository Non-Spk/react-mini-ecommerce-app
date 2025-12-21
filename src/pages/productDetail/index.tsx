import ProductDetailView from "@/components/ProductDetailView";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";
import BackToHomeButton from "@/components/BackToHomeButton";
import { useProductDetailWithCart } from "@/hooks";

export default function ProductDetailPage() {
    const { product, loading, error, quantity, setQuantity, handleAddToCart } =
        useProductDetailWithCart();

    if (loading) return <div>Loading...</div>;
    if (error || !product) return <div>Product not found</div>;

    return (
        <>
            <ProductDetailView product={product} />
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <AddToCartButton onAdd={handleAddToCart} />
            <BackToHomeButton />
        </>
    );
}

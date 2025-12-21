import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProductDetail } from "@/hooks/useProductDetail";
import BackToHomeButton from "@/components/BackToHomeButton";
import ProductDetailView from "@/components/ProductDetailView";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { product, loading, error } = useProductDetail(id);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        console.log(`add id: ${id} to cart, ${quantity}`);
    };

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
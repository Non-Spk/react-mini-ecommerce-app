import ProductDetailLayout from "@/components/layouts/ProductDetailLayout";
import ProductDetailMain from "@/components/ProductDetailMain";
import ProductBackButton from "@/components/ProductBackButton";
import { useProductDetailWithCart } from "@/hooks";

export default function ProductDetailPage() {
    const { product, loading, error, quantity, setQuantity, handleAddToCart } =
        useProductDetailWithCart();

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error || !product) return <div className="text-center py-20">Product not found</div>;

    return (
        <ProductDetailLayout>
            <ProductDetailMain
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
                handleAddToCart={handleAddToCart}
            />
            <ProductBackButton />
        </ProductDetailLayout>
    );
}

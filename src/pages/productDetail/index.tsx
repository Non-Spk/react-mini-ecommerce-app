import { useParams } from "react-router-dom";
import { useProductDetail } from "@/hooks/useProductDetail";
import ProductDetailView from "@/components/ProductDetailView";

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { product, loading, error } = useProductDetail(id);

    if (loading) return <div>Loading...</div>;
    if (error || !product) return <div>Product not found</div>;

    return <ProductDetailView product={product} />;
}
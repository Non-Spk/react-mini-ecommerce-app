import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetail } from "./useProductDetail";
import { useCartStore } from "@/stores";

export function useProductDetailWithCart() {
    const { id } = useParams<{ id: string }>();
    const { product, loading, error } = useProductDetail(id);
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((s) => s.addItem);
    const items = useCartStore((s) => s.items);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!id || !product) return;
        addItem(Number(id), quantity);
        console.log("Current cart items:", [...items, { productId: Number(id), quantity }]);
        navigate("/");
    };

    return { product, loading, error, quantity, setQuantity, handleAddToCart };
}

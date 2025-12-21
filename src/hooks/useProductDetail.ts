import { useEffect, useState } from "react";
import { productItemServices } from "@/services/productList";
import type { ProductItem } from "@/interfaces";

export function useProductDetail(id?: string) {
    const [product, setProduct] = useState<ProductItem | null>(null);
    const [loading, setLoading] = useState(!!id);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        async function fetchProduct() {
            try {
                const data = await productItemServices.getProductItemById(Number(id));
                setProduct(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    return { product, loading, error };
}

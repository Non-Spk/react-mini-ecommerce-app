import { useEffect, useState } from "react";
import { productItemServices } from "@/services/productList";
import type { ProductItem } from "@/interfaces";

export function useProductDetail(id?: string) {
    const [product, setProduct] = useState<ProductItem | null>(null);
    const [loading, setLoading] = useState(!!id);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        if (!id) return;

        productItemServices
            .getProductItemById(Number(id))
            .then(setProduct)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [id]);

    return { product, loading, error };
}

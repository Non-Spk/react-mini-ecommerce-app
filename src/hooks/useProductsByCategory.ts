import { useState, useEffect } from "react";
import type { ProductItem } from "@/interfaces";
import { productListServices } from "@/services";

export function useProductsByCategory(category?: string, page = 1, limit = 10) {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [maxPage, setMaxPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!category) return;

        async function fetchProducts() {
            setLoading(true);
            try {
                if (!category) return;

                const res = await productListServices.getAllProductsByCategory(
                    category!,
                    limit,
                    (page - 1) * limit
                );
                setProducts(res.products);
                setMaxPage(Math.ceil(res.total / limit));
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [category, page, limit]);

    return { products, maxPage, loading, error };
}

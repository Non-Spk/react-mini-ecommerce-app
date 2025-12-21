import { useState, useEffect } from "react";
import { categoryListServices } from "@/services";
import type { Category } from "@/interfaces";

export function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const data = await categoryListServices.getAllCategories();
                setCategories(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []);

    return { categories, loading, error };
}

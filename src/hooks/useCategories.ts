import { useState, useEffect } from "react";
import { categoryListServices } from "@/services";
import type { Category } from "@/interfaces";

export function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoryListServices.getAllCategories();
                setCategories(data);
            } catch (err) {
                setError(`Error fetching categories: ${err}`);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    return { categories, loading, error };
}

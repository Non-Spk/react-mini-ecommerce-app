import { useState, useEffect } from "react";
import type { ProductItem } from "@/interfaces";
import { productListServices } from "@/services";

interface ProductsResponse {
    products: ProductItem[];
    maxPage: number;
}

export function useProductsByCategory(category?: string, page = 1, limit = 10) {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        if (!category) return;
        productListServices
            .getAllProductsByCategory(category, limit, (page - 1) * limit)
            .then((res) => {
                const data: ProductsResponse = {
                    products: res.products,
                    maxPage: Math.ceil(res.total / limit),
                };
                setProducts(data.products);
                setMaxPage(data.maxPage);
            });
    }, [category, page, limit]);

    return { products, maxPage };
}

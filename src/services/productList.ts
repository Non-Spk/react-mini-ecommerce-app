import axios from "axios";
import { BASE_DUMMYJSON_URL } from "@/utils/constant";
import type { ProductList, ProductItem } from "@/interfaces";

export const productListServices = {
    getAllProducts: async (
        limit?: number,
        skip?: number,
        sortBy?: string,
        order?: string
    ): Promise<ProductList> => {
        const { data } = await axios.get<ProductList>(`${BASE_DUMMYJSON_URL}/products`, {
            params: {
                limit: limit ?? 30,
                skip: skip ?? 0,
                sortBy: sortBy ?? "title",
                order: order ?? "asc",
            },
        });
        return data
    },
    getAllProductsByCategory: async (
        category: string,
        sortBy?: string,
        order?: string
    ): Promise<ProductList> => {
        const { data } = await axios.get<ProductList>(
            `${BASE_DUMMYJSON_URL}/products/category/${encodeURIComponent(category)}`,
            {
                params: {
                    sortBy: sortBy ?? "title",
                    order: order ?? "asc",
                },
            }
        );
        return data;
    }
};

export const productDetailServices = {
    getProductById: async (id: number): Promise<ProductItem> => {
        const { data } = await axios.get<ProductItem>(`${BASE_DUMMYJSON_URL}/products/${id}`);
        return data;
    }
}
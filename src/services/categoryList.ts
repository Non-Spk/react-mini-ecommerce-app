import axios from "axios";
import { BASE_DUMMYJSON_URL } from "@/utils/constant";
import type { Category } from "@/interfaces";

export const categoryListServices = {
    getAllCategories: async (): Promise<Category[]> => {
        const { data } = await axios.get<Category[]>(`${BASE_DUMMYJSON_URL}/products/categories`);
        return data;
    }
};
import axios from "axios";
import type { AxiosResponse } from "axios";
import { BASE_DUMMYJSON_URL } from "@/utils/constant";
import type { ProductList } from "@/interfaces";

type ProductListResponse = AxiosResponse<ProductList>;

export const productListServices = {
    getAllProducts: async (
        limit?: number,
        skip?: number,
        sortBy?: string,
        order?: string
    ): Promise<ProductListResponse> => {
        return axios.get<ProductList>(`${BASE_DUMMYJSON_URL}/products`, {
            params: {
                limit: limit ?? 30,
                skip: skip ?? 0,
                sortBy: sortBy ?? "title",
                order: order ?? "asc",
            },
        });
    },
};

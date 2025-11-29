import axios from "axios";
import { BASE_DUMMYJSON_URL } from "@/utils/constant";
import type { categoryItem } from "@/interfaces/category";

interface IGetCategoryListResponse {
  status: number | undefined;
  data: categoryItem[];
}

export const categoryListServices = {
  getCategoryList: async (): Promise<IGetCategoryListResponse> => {
    const response = await axios.get(
      `${BASE_DUMMYJSON_URL}/products/categories`
    );
    return response;
  },
};

import axios from "axios";
import { BASE_DUMMYJSON_URL } from "@utils/constant";
import type { ProductListResponse } from "@/interfaces/productList";

interface IGetProductListResponse {
  status: number | undefined;
  data: ProductListResponse;
}

export const productSearchServices = {
  getSearchProducts: async (
    text?: string,
    sortBy?: string,
    order?: string
  ): Promise<IGetProductListResponse> => {
    const response = await axios.get(
      `${BASE_DUMMYJSON_URL}/products/search?q=${text}&select=id,title,price,rating&sortBy=${
        sortBy || "title"
      }&order=${order || "asc"}`
    );
    return response;
  },
};

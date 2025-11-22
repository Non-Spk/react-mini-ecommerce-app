import axios from "axios";
import { BASE_DUMMYJSON_URL } from "@utils/constant";
import type { Product } from "@/interfaces/product";

interface IGetProductDetailResponse {
  status: number | undefined;
  data: Product;
}

export const ProductDetailServices = {
  getProduct: async (id?: number): Promise<IGetProductDetailResponse> => {
    const response = await axios.get(`${BASE_DUMMYJSON_URL}/products/${id}`);
    return response;
  },
};

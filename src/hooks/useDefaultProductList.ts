import { useEffect, useState } from "react";
import { productListServices } from "@/services/index";
import type { ProductListResponse } from "@/interfaces/productList";

export const useDefaultProductList = () => {
  const [result, setResult] = useState<ProductListResponse | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await productListServices.getAllProducts();
        const data: ProductListResponse = res.data;
        setResult(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return { result };
};

import { useEffect, useState } from "react";
import { productSearchServices } from "@/services/index";
import type { ProductListResponse } from "@/interfaces/productList";

export const useSearchBox = (text: string) => {
  const [result, setResult] = useState<ProductListResponse | null>(null);

  useEffect(() => {
    if (!text) return;

    const fetchData = async () => {
      try {
        const res = await productSearchServices.getSearchProducts(text);
        const data: ProductListResponse = res.data;
        setResult(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [text]);

  return { result };
};

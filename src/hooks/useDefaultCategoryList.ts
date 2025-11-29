import { useEffect, useState, startTransition } from "react";
import { categoryListServices } from "@/services/index";
import type { categoryItem } from "@/interfaces/category";

export const useDefaultCategoryList = () => {
  const [categories, setCategories] = useState<categoryItem[]>([]);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryListServices.getCategoryList();

        startTransition(() => {
          setCategories(res.data);
          if (res.data.length > 0) {
            setActiveMenu(res.data[0].name);
          }
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  return {
    categories,
    activeMenu,
    setActiveMenu,
  };
};

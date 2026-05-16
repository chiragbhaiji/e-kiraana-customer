import { CategoryItem } from "@/src/shared/types";
import { useEffect, useState } from "react";
import { getCategories } from "../apis/getCategories";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allItems = await getCategories();
      // Need to apply filters and sorting here based on the filters and sortingOption
      setCategories(allItems);
    };

    fetchData();
  }, []);

  return { categories };
};

export { useCategories };

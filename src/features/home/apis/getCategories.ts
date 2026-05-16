import apiClient from "@/src/services/apiClient";
import "@/src/shared/mockData";
import { CategoryItem } from "@/src/shared/types";

export const getCategories: () => Promise<Array<CategoryItem>> = async () => {
  try {
    const response = await apiClient.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

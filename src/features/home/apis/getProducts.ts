import apiClient from "@/src/services/apiClient";
import "@/src/shared/mockData";
import { ProductItem } from "@/src/shared/types";

export const getProducts: () => Promise<Array<ProductItem>> = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

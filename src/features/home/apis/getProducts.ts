import apiClient from "@/src/services/apiClient";
import "@/src/shared/mockData";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

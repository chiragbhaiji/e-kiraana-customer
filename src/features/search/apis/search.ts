import apiClient from "@/src/services/apiClient";
import "@/src/shared/mockData";

export const searchProducts = async (query: string) => {
  try {
    const response = await apiClient.get(
      `/search?query=${encodeURIComponent(query)}`,
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch search results");
  }
};

import AxiosMockAdapter from "axios-mock-adapter";

import apiClient from "@/src/services/apiClient";
import { mockProducts } from "./products";

export const mock = new AxiosMockAdapter(apiClient, {
  delayResponse: 500,
});

// Mock data for products
mock.onGet("/products").reply(200, mockProducts);

mock.onGet(/\/search\?query=.*/).reply((config) => {
  const url = new URL(config.url!, process.env.EXPO_PUBLIC_API_URL);
  const query = url.searchParams.get("query")?.toLowerCase() || "";

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  return [200, filteredProducts];
});

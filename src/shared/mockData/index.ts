import AxiosMockAdapter from "axios-mock-adapter";

import apiClient from "@/src/services/apiClient";
import { mockProducts } from "./products";

export const mock = new AxiosMockAdapter(apiClient, {
  delayResponse: 500,
});

// Mock data for products
mock.onGet("/products").reply(200, mockProducts);

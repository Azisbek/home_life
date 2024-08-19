import { serverApi } from "./client";

export const ProductIdApi = {
  getProductIdPage(id) {
    return serverApi.get(`/product/${id}/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

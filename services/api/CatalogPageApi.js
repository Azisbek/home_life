import { serverApi } from "./client";

export const CatalogPageApi = {
  getCatalogPage() {
    return serverApi.get("product/all/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

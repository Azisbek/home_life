import { serverApi } from "./client";

export const CatalogPageApi = {
  getCatalogPage() {
    return serverApi.get("product/list/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

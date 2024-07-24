import { serverApi } from "./client";

export const MainPageApi = {
  getMainPage() {
    return serverApi.get("product/list/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

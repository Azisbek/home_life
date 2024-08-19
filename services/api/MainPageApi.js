import { serverApi } from "./client";

export const MainPageApi = {
  getMainPage() {
    return serverApi.get("/product/homepage/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

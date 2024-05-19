import { serverApi } from "./client";

export const MainPageApi = {
  getMainPage() {
    return serverApi.get("users", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

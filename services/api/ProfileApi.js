import { serverApi } from "./client";

export const ProfileApi = {
  getProfile() {
    return serverApi.get("users/profile/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

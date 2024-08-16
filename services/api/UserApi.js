import { serverApi } from "./client";

export const UserApi = {
  async signUp(dataForm) {
    try {
      const response = await serverApi.post("/users/register/", dataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error(
        "Error sign up:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },

  async getProfile() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("no token");
    }

    try {
      const response = await serverApi.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(
        "error",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
};

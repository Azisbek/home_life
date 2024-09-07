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

  async signIn(dataForm) {
    try {
      const response = await serverApi.post("/users/login/", dataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error(
        "Error sign in:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },

  async getProfile() {
    const access = localStorage.getItem("access");

    try {
      const response = await serverApi.get("/users/me/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      if (!response || !response.data) {
        throw new Error("No profile data returned from the server.");
      }

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching profile:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Error fetching profile. Please try again later.");
    }
  },
};

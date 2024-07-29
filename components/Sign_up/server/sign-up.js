import { serverApi } from "../../../services/api/client";

export const Registration = {
  async signUp(dataForm) {
    console.log(dataForm);
    try {
      const response = await serverApi.post("/users/register/", dataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { access, refresh } = response.data;

      return response;
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
};

import { useState } from "react";
import { UserApi } from "../services/api/UserApi";

export const useUserApi = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signUp = async (form) => {
    const data = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      username: form.username,
      number: form.number,
      password: form.password,
    };

    console.log(form);

    try {
      const response = await UserApi.signUp(data);
      const { user } = response.data;
      localStorage.setItem("access", user.access);
      localStorage.setItem("refresh", user.refresh);
 
      const userResponse = await UserApi.getProfile();
      localStorage.setItem("user", JSON.stringify(userResponse));
      setUser(userResponse);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError("Ошибка регистрации.");
    }
  };

  return { user, error, signUp, setError };
};





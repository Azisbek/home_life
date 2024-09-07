import { useState } from "react";
import { UserApi } from "../services/api/UserApi";

export const useUserApi = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const SignUp = async (form) => {
    const data = {
      gender: +form.gender,
      age: +form.age,
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
      return response;
    } catch (error) {
      console.log(error.message);
      setError("Ошибка регистрации.");
    }
  };

  const SignIn = async (form) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    try {
      const response = await UserApi.signIn(data);
      const { user } = response.data;
      localStorage.setItem("access", user.tokens.access);
      localStorage.setItem("refresh", user.tokens.refresh);

      const userResponse = await UserApi.getProfile();
      setUser(userResponse);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError("Ошибка регистрации.");
    }
  };

  return { user, error, SignUp, setError, SignIn };
};

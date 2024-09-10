import { useState } from "react";
import { useSignUpMutation } from "../components/Account/api";

export const useSignUp = () => {
  const [form, setForm] = useState({
    gender: "",
    age: "",
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    number: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");
  const [signUp, singUpResponse] = useSignUpMutation();

  const onSubmit = async (e) => {
    // e.preventDefault();

    try {
      await signUp(form).unwrap();
    } catch (err) {
      const errorMessage = err.data?.message || "Произошла ошибка";
      setErrorText(errorMessage);
    }
  };

  return { form, setForm, errorText, onSubmit, singUpResponse };
};

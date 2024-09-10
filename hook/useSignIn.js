import { useState } from "react";
import { useSignInMutation } from "../components/Account/api";

export const useSignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [signIn, signInResponse] = useSignInMutation();
  const [errorText, setErrorText] = useState("");

  const onSubmit = async (e) => {
    try {
      await signIn(form).unwrap();
    } catch (err) {
      const errorMessage = err.data?.message || "Произошла ошибка";
      setErrorText(errorMessage);
    }
  };

  return { form, setForm, errorText, onSubmit, signInResponse };
};

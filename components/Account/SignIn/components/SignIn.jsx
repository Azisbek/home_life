import { useState } from "react";
import Image from "next/image";
import { AppButton } from "../../../ui/Button/AppButton";
import { CloseEye } from "../../../../assets/icon/close.svg";
import { OpenEye } from "../../../../assets/icon/eye-open.svg";
import GoogleIcon from "../../../../assets/icon/google_icon.svg";
import { Input } from "../../../ui/Input/Input";

import s from "./SignIn.module.css";
import { useSignIn } from "../../../../hook/useSignIn";

export const SignIn = ({ onClose }) => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { errorText, form, setForm, onSubmit, signInResponse } = useSignIn();

  const clickOpenEyeHandler = () => {
    setShow(!show);
  };

  const clickOpenEyeConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (form.password !) {
    //   setError("Пароли не совпадают");
    //   return;
    // }

    try {
      await onSubmit();
    } catch (err) {
      setError(err.message || "Что-то пошло не так");
    }
  };

  return (
    <div className={s.container}>
      <div className={s.blockTitle}>
        <h2>Login</h2>
        <p>У вас уже есть учетная запись? Войти</p>
      </div>

      <form className={s.formContainer} onSubmit={handleSubmit}>
        <Input
          name='email'
          value={form.email}
          onChange={handleInputChange}
          placeholder='Электронная почта*'
        />

        <Input
          name='password'
          // type={show ? "text" : "password"}
          value={form.password}
          onChange={handleInputChange}
          placeholder='Введите пароль*'
          rightIcon={show ? CloseEye : OpenEye}
          rightOnClick={clickOpenEyeHandler}
        />

        <AppButton className={s.googleBtn} variant='whiteBtn' onClick={onClose}>
          <Image src={GoogleIcon} alt='googleIcon' /> Войти с помощью Google
        </AppButton>
        <AppButton variant='button' type='submit'>
          Login
        </AppButton>

        <AppButton variant='whiteBtn' onClick={onClose}>
          Назад
        </AppButton>
      </form>
    </div>
  );
};

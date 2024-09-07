import { useState } from "react";
import Image from "next/image";
import { AppButton } from "../../../ui/Button/AppButton";
import { CloseEye } from "../../../../assets/icon/close.svg";
import { OpenEye } from "../../../../assets/icon/eye-open.svg";
import GoogleIcon from "../../../../assets/icon/google_icon.svg";
import { useUserApi } from "../../../../hook/useUserApi";
import { Input } from "../../../ui/Input/Input";

import s from "./SignIn.module.css";

const SignUp = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { user, error, SignIn, setError } = useUserApi();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

    if (form.password !== form.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    const data = {
      email: form.email,
      password: form.password,
    };

    await SignIn(data);
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

        <Input
          name='confirmPassword'
          type={showConfirm ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleInputChange}
          placeholder='Подтвердите пароль*'
          rightIcon={showConfirm ? CloseEye : OpenEye}
          rightOnClick={clickOpenEyeConfirmHandler}
        />

        <AppButton className={s.googleBtn} variant='whiteBtn' onClick={onClose}>
          <Image src={GoogleIcon} alt='googleIcon' /> Войти с помощью Google
        </AppButton>
        {error && <p>{error}</p>}
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

export default SignUp;

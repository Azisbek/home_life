import { useState } from "react";
import Image from "next/image";
import { AppButton } from "../../ui/Button/AppButton";
import { CloseEye } from "../../../assets/icon/close.svg";
import { OpenEye } from "../../../assets/icon/eye-open.svg";
import GoogleIcon from "../../../assets/icon/google_icon.svg";
import { useUserApi } from "../../../hook/useUserApi";
import { Input } from "../../ui/Input/Input";

import s from "./styled.module.css";

const SignUp = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { user, error, signUp, setError } = useUserApi();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    number: "",
    password: "",
    confirmPassword: "",
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
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      username: form.username,
      number: form.number,
      password: form.password,
    };

    await signUp(data);
  };

  return (
    <div className={s.container}>
      {error && <p>{error}</p>}
      <div className={s.blockTitle}>
        <h2>Зарегистрироваться</h2>
        <p>У вас уже есть учетная запись? Войти</p>
      </div>

      <form className={s.formContainer} onSubmit={handleSubmit}>
        <Input
          name='first_name'
          value={form.first_name}
          onChange={handleInputChange}
          placeholder='Имя*'
        />

        <Input
          name='last_name'
          value={form.last_name}
          onChange={handleInputChange}
          placeholder='Фамилия*'
        />

        <Input
          name='email'
          value={form.email}
          onChange={handleInputChange}
          placeholder='Электронная почта*'
        />

        <Input
          name='username'
          value={form.username}
          onChange={handleInputChange}
          placeholder='Имя пользователя*'
        />

        <Input
          name='number'
          value={form.number}
          onChange={handleInputChange}
          placeholder='Номер телефона'
        />

        <Input
          name='password'
          type={show ? "text" : "password"}
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

        <AppButton variant='button' type='submit'>
          Регистрация
        </AppButton>

        <AppButton variant='whiteBtn' onClick={onClose}>
          Назад
        </AppButton>
      </form>
    </div>
  );
};

export default SignUp;

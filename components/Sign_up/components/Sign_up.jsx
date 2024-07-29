import React, { useState } from "react";
import Image from "next/image";
import { CustomInput } from "../../ui/Input/Input";
import AppButton from "../../ui/Button/AppButton";
import OpenEye from "../../../assets/icon/eye-open.svg";
import CloseEye from "../../../assets/icon/close.svg";
import GoogleIcon from "../../../assets/icon/google_icon.svg";
import s from "./styled.module.css";
import { Registration } from "../server/sign-up";

const SignUp = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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

    try {
      const response = await Registration.signUp(data);
      const { user } = response.data;
      localStorage.setItem("access", user.access);
      localStorage.setItem("refresh", user.refresh);
      console.log("User data:", user);
    } catch (error) {
      return error;
    }
  };

  return (
    <section className={s.container}>
      <div className={s.blockTitle}>
        <h2>Зарегистрироваться</h2>
        <p>У вас уже есть учетная запись? Войти</p>
      </div>

      <form className={s.formContainer} onSubmit={handleSubmit}>
        <input
          name='first_name'
          value={form.first_name}
          onChange={handleInputChange}
          placeholder='Имя*'
        />

        <input
          name='last_name'
          // value={form.last_name}
          onChange={handleInputChange}
          placeholder='Фамилия*'
        />

        <input
          name='email'
          // value={form.email}
          onChange={handleInputChange}
          placeholder='Электронная почта*'
        />

        <input
          name='username'
          value={form.username}
          onChange={handleInputChange}
          placeholder='Имя пользователя*'
        />

        <input
          name='number'
          value={form.number}
          onChange={handleInputChange}
          placeholder='Номер телефона'
        />

        <input
          name='password'
          type={show ? "text" : "password"}
          value={form.password}
          onChange={handleInputChange}
          placeholder='Введите пароль*'
          image={show ? CloseEye : OpenEye}
          clickIcon={clickOpenEyeHandler}
        />

        <input
          name='confirmPassword'
          type={showConfirm ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleInputChange}
          placeholder='Подтвердите пароль*'
          image={showConfirm ? CloseEye : OpenEye}
          clickIcon={clickOpenEyeConfirmHandler}
        />

        <div className={s.blockInput}>
          {/* <Select /> */}
          {/* <CustomInput placeholder="Возраст" /> */}
        </div>

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
    </section>
  );
};

export default SignUp;

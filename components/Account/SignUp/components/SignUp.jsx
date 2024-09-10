import { useState } from "react";
import Image from "next/image";
import { AppButton } from "../../../ui/Button/AppButton";
import { CloseEye } from "../../../../assets/icon/close.svg";
import { OpenEye } from "../../../../assets/icon/eye-open.svg";
import GoogleIcon from "../../../../assets/icon/google_icon.svg";
import { Input } from "../../../ui/Input/Input";

import s from "./styled.module.css";
import { useSignUp } from "../../../../hook/useSingUp";

const SignUp = ({ onClose }) => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { errorText, form, setForm, onSubmit, singInResponse } = useSignUp();

  const clickOpenEyeHandler = () => {
    setShow(!show);
  };

  const clickOpenEyeConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (form.password !== form.confirmPassword) {
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
          name='age'
          value={form.age}
          onChange={handleInputChange}
          placeholder='Возраст*'
        />
        <select
          name='gender'
          value={form.gender}
          onChange={handleInputChange}
          className={s.selectGender}
        >
          <option value=''>Выберите пол*</option>
          <option value='1'>Мужчина</option>
          <option value='2'>Женщина</option>
        </select>
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
        {/* <Input
          name='confirmPassword'
          type={showConfirm ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleInputChange}
          placeholder='Подтвердите пароль*'
          rightIcon={showConfirm ? CloseEye : OpenEye}
          rightOnClick={clickOpenEyeConfirmHandler}
        /> */}
        <AppButton className={s.googleBtn} variant='whiteBtn' onClick={onClose}>
          <Image src={GoogleIcon} alt='googleIcon' /> Войти с помощью Google
        </AppButton>
        <AppButton variant='button' type='submit'>
          Регистрация
        </AppButton>
        <AppButton variant='whiteBtn' onClick={onClose}>
          Назад
        </AppButton>
        {error && <p className={s.error}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;

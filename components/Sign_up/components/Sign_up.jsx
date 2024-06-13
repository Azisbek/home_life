import React from "react";
import CustomInput from "../../ui/Input/Input";
import AppButton from "../../ui/Button/AppButton";

import s from "./styled.module.css";

const Sign_up = ({ onClose }) => {
  return (
    <section className={s.container}>
      <h2>Зарегистрироваться </h2>
      <p>У вас уже есть учетная запись? Войти</p>

      <form className={s.formContainer}>
        <CustomInput />
        <CustomInput />
        <CustomInput />

        <div className={s.blockInput}>
          <CustomInput />
          <CustomInput />
        </div>

        <AppButton onClick={onClose}>close</AppButton>
      </form>
    </section>
  );
};

export default Sign_up;

import React, { useState } from "react";
import Image from "next/image";

import { CustomInput } from "../../ui/Input/Input";
import AppButton from "../../ui/Button/AppButton";
import Select from "../../ui/Select/Select";

import OpenEye from "../../../assets/icon/eye-open.svg";
import CloseEye from "../../../assets/icon/close.svg";
import GoogleIcon from "../../../assets/icon/google_icon.svg";

import s from "./styled.module.css";

const Sign_up = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const clickOpenEyeHandler = () => {
    setShow(!show);
  };

  const clickOpenEyeConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <section className={s.container}>
      <div className={s.blockTitle}>
        <h2>Зарегистрироваться </h2>
        <p>У вас уже есть учетная запись? Войти</p>
      </div>

      <form className={s.formContainer}>
        <CustomInput type='text' placeholder='Введите номер*' />

        <CustomInput
          type={show ? "text" : "password"}
          placeholder='Введите пароль*'
          image={show ? CloseEye : OpenEye}
          clickIcon={clickOpenEyeHandler}
        />

        <CustomInput
          type={showConfirm ? "text" : "password"}
          placeholder='Подтвердите пароль*'
          image={showConfirm ? CloseEye : OpenEye}
          clickIcon={clickOpenEyeConfirmHandler}
        />

        <div className={s.blockInput}>
          <Select />
          <CustomInput placeholder='Возраст' />
        </div>

        <AppButton className={s.googleBtn} variant='whiteBtn' onClick={onClose}>
          <Image src={GoogleIcon} alt='googleIcon' /> Войти с помощью Google
        </AppButton>

        <AppButton variant='button' onClick={onClose}>
          Зарегистрироваться
        </AppButton>
        <AppButton variant='whiteBtn' onClick={onClose}>
          Назад
        </AppButton>
      </form>
    </section>
  );
};

export default Sign_up;

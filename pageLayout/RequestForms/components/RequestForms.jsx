import React from "react";
import s from "./RequestForms.module.css";

const RequestForms = () => {
  return (
    <form className={s.requestForms}>
      <h1>Заполните форму</h1>
      <div className={s.requestFormContent}>
        <div className={s.requestFormContentForm}>
            <input type="text" placeholder="Ваше Имя*"/>
            <input type="text" placeholder="Адрес дома и название улицы*"/>
            <input type="text" placeholder="Крыло, подъезд, этаж и тд (необязательно)"/>
            <h3>Выберите способ оплаты:</h3>
            <label htmlFor=""><input type="radio" />Наличными при получении</label>
            <label htmlFor=""><input type="radio" />Картой банка при получении</label>
        </div>
        <div className={s.requestFormContentSumm}>
            <h2>Сумма заказов</h2>
            <p>Товары: 1шт</p>
            <p>Подытог: 1 389 сом</p>
            <div className={s.requestFormContentTotal}>
                <h3>Итого:</h3>
                <h3>25 490 сом</h3>
            </div>
            <button>Подтвердить заказа</button>
        </div>
      </div>
    </form>
  );
};

export default RequestForms;

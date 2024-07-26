import React from "react";

export const CardOrders = ({ quantity, subtotal, totalPrice }) => {
  return (
    <div>
      <p>Сумма заказов </p>

      <p>Товары: {quantity}шт </p>
      <p>Подытог: {subtotal}сом </p>

      <p>Итого: {totalPrice}</p>
    </div>
  );
};

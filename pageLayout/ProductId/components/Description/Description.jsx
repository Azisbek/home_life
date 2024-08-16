import React from "react";
import { BlockDescription } from "../../../../components/BlockDescription/BlockDescription";
import s from "./Description.module.css";

export const Description = ({ array }) => {
  return (
    <div>
      <h1 className={s.title}>О товаре</h1>
      <div className={s.container}>
        {array.map((el, index) => {
          return (
            <BlockDescription
              key={`${index} ${el}`}
              title="Ежедневная экспресс-программа"
              description="Стиральная машина Beko WRE 6511 BWW имеет 15 пр
           ограмм стирки и максимальный отжим со скоростью 1000 об./мин. 
           Функция отложенного стар та позволяет запускать стирку в любое время. 
           Стиральная машина осуществляет автоматический контроль уровня воды и 
           пенообразования во время работы."
            />
          );
        })}
      </div>
    </div>
  );
};

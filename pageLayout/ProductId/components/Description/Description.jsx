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
              key={`${index} ${el.title}`}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
};

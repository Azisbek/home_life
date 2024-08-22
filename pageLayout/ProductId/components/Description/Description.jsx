import React from "react";
import { BlockDescription } from "../../../../components/BlockDescription/BlockDescription";
import s from "./Description.module.css";

export const Description = ({ data }) => {
  return (
    <div>
      <h1 className={s.title}>О товаре</h1>
      <div className={s.container}>
        <BlockDescription title='нету title' description={data.description} />
      </div>
    </div>
  );
};

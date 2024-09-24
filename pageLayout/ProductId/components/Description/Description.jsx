import React from "react";
import { BlockDescription } from "../../../../components/BlockDescription/BlockDescription";
import s from "./Description.module.css";
import { Space } from "../../../../components/ui/Space/Space";
import { store } from "../../../../store";

export const Description = ({ data }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  return (
    <div >
      <h1 className={s.title}>О товаре</h1>
      <Space h={isMobile ? 10 : 70} />
      <div className={s.container}>
        <BlockDescription title="good" description={data.description} />
      </div>
    </div>
  );
};

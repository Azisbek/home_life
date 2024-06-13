import React from "react";
import s from "./styled.module.css";
import clsx from "clsx";

export const SwiperBullet = ({ num, count }) => {
  const bullet = [];

  for (let i = 1; i <= count; i++) {
    bullet.push(<div className={clsx(s.bullet, num === i ? s.active : "")} />);
  }

  return <div className={s.bulletContainer}>{bullet}</div>;
};

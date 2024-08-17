import React from "react";
import Link from "next/link";
import { ROUTER_NAMES } from "../../../router/routerNames";
import s from "./AppNavigateHeader.module.css";

export const AppNavigateHeader = () => {
  return (
    <ul className={s.containerNavigate}>
      <Link href={ROUTER_NAMES.HOME}>Главная </Link>
      <Link href={ROUTER_NAMES.CATALOG}>Каталог </Link>
      <Link href={ROUTER_NAMES.CONTACTS}>Контакты</Link>
      <Link href={ROUTER_NAMES.BASKET}>Корзина</Link>
      <Link href={ROUTER_NAMES.ABOUT}>О нас</Link>
    </ul>
  );
};

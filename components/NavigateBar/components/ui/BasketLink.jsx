import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { CardIcon } from "../icon/CardIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const BasketLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(s.link, pathName === ROUTER_NAMES.BASKET && s.active)}
      href={ROUTER_NAMES.BASKET}
    >
      <CardIcon
        color={pathName === ROUTER_NAMES.BASKET ? "#2241FC" : "black"}
        size={20}
      />
      Каталог
    </Link>
  );
};

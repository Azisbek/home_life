import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { CardIcon } from "../icon/CardIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const CardLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(s.link, pathName === ROUTER_NAMES.CARD && s.active)}
      href={ROUTER_NAMES.CARD}
    >
      <CardIcon
        color={pathName === ROUTER_NAMES.CARD ? "#2241FC" : "black"}
        size={20}
      />
      Каталог
    </Link>
  );
};

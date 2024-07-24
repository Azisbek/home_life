import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { HomeIcon } from "../icon/HomeIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const HomeLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(s.link, pathName === ROUTER_NAMES.HOME && s.active)}
      href={ROUTER_NAMES.HOME}
    >
      <HomeIcon
        color={pathName === ROUTER_NAMES.HOME ? "#2241FC" : "black"}
        size={20}
      />
      Главная
    </Link>
  );
};

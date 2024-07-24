import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { FavoritesIcon } from "../icon/FavoritesIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const FavoritesLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(s.link, pathName === ROUTER_NAMES.FAVORITES && s.active)}
      href={ROUTER_NAMES.FAVORITES}
    >
      <FavoritesIcon
        color={pathName === ROUTER_NAMES.FAVORITES ? "#2241FC" : "black"}
        size={20}
      />
      Избранные
    </Link>
  );
};

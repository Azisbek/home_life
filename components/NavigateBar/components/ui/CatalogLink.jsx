import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { CatalogIcon } from "../icon/CatalogIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const CatalogLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(s.link, pathName === ROUTER_NAMES.CATALOG && s.active)}
      href={ROUTER_NAMES.CATALOG}
    >
      <CatalogIcon
        color={pathName === ROUTER_NAMES.CATALOG ? "#2241FC" : "black"}
        size={20}
      />
      Каталог
    </Link>
  );
};

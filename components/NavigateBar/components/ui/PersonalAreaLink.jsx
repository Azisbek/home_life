import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { PersonalAreaIcon } from "../icon/PersonalAreaIcon";
import { ROUTER_NAMES } from "../../../../router/routerNames";
import { usePathname } from "next/navigation";
import s from "../NavigateBar.module.css";

export const PersonalAreaLink = () => {
  const pathName = usePathname();
  return (
    <Link
      className={clsx(
        s.link,
        pathName === ROUTER_NAMES.PERSONAL_AREA && s.active
      )}
      href={ROUTER_NAMES.PERSONAL_AREA}
    >
      <PersonalAreaIcon
        color={pathName === ROUTER_NAMES.PERSONAL_AREA ? "#2241FC" : "black"}
        size={20}
      />
      Профиль
    </Link>
  );
};

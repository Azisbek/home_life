import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HomeLink } from "./ui/HomeLink"
import { CatalogLink } from "./ui/CatalogLink"
import { FavoritesLink } from "./ui/FavoritesLink"
import { PersonalAreaLink } from "./ui/PersonalAreaLink"
import { CardLink } from "./ui/CardLink"

import s from "./NavigateBar.module.css"


export const NavigateBar = () => {
    const pathName = usePathname();

    return (
        <div className={clsx("container", s.container)}>
            <HomeLink />
            <CatalogLink />
            <FavoritesLink />
            <PersonalAreaLink />
            <CardLink />
        </div>
    );
};



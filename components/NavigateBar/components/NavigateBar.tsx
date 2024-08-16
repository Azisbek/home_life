import React from "react";
import clsx from "clsx";
import { HomeLink } from "./ui/HomeLink"
import { CatalogLink } from "./ui/CatalogLink"
import { FavoritesLink } from "./ui/FavoritesLink"
import { PersonalAreaLink } from "./ui/PersonalAreaLink"
import { BasketLink } from "./ui/BasketLink"

import s from "./NavigateBar.module.css"


export const NavigateBar = () => {

    return (
        <div className={clsx("container", s.container)}>
            <HomeLink />
            <CatalogLink />
            <FavoritesLink />
            <PersonalAreaLink />
            <BasketLink />
        </div>
    );
};



import React from "react";

import logo from "../../assets/Logo.png";
import clsx from "clsx";

import AppNavigateHeader from "./components/AppNavigateHeader";
import Image from "next/image";

import classes from "./AppHeader.module.css";
import CustomInput from "../ui/Input/Input";
import AppProfileHeader from "./components/AppProfileHeader";

import Search from "../../assets/search.png";

const AppHeader = () => {
  return (
    <header className={clsx("container", classes.containerHeader)}>
      <div>
        <Image src={logo} alt='logo' width={182} />
      </div>
      <div>
        <CustomInput
          type='text'
          placeholder='Поиск'
          image={Search}
          widthImage={18}
        />
      </div>
      <div>
        <AppNavigateHeader />
      </div>

      <div>
        <AppProfileHeader />
      </div>
    </header>
  );
};

export default AppHeader;

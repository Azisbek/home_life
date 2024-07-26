import Image from "next/image";
import clsx from "clsx";
import { BurgerMenu } from "@components/BurgetMenu";
import logo from "../../../assets/Logo.png";
import Search from "../../../assets/search.png";
import { CustomInput } from "../../ui/Input/Input";

import s from "./MobileHeader.module.css";

export const MobileHeader = () => {
  return (
    <header className={clsx("container")}>
      <Image src={logo} alt='logo' width={129} />

      <div className={s.containerBlockMenu}>
        <BurgerMenu />

        {/* <Input
          type='text'
          className={s.input}
          placeholder='Поиск'
          leftIcon={<Search />}
        /> */}
      </div>
    </header>
  );
};

// Ваш файл AppHeader.js или любой другой компонент
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import AppNavigateHeader from "./components/AppNavigateHeader";
import CustomInput from "../ui/Input/Input";
import AppProfileHeader from "./components/AppProfileHeader";
import Search from "../../assets/search.png";
import classes from "./AppHeader.module.css";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../ui/Modal/components/CustomModal";
import clsx from "clsx";
import Sign_up from "../Sign_up/components/Sign_up";

const AppHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className={clsx("container", classes.containerHeader)}>
        <div>
          <Image src={logo} alt="logo" width={182} />
        </div>
        <div>
          <CustomInput
            type="text"
            placeholder="Поиск"
            image={Search}
            widthImage={18}
          />
        </div>
        <div>
          <AppNavigateHeader />
        </div>

        <div onClick={onOpen}>
          <AppProfileHeader />
        </div>
      </header>
      {isOpen && <CustomModal isOpen={isOpen}><Sign_up onClose={onClose} /></CustomModal>}


    </>
  );
};

export default AppHeader;

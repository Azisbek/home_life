import React from "react";
import clsx from "clsx";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

import logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";

import AppNavigateHeader from "./components/AppNavigateHeader";
import AppProfileHeader from "./components/AppProfileHeader";
import Sign_up from "../Sign_up/components/Sign_up";

import CustomInput from "../ui/Input/Input";
import CustomModal from "../ui/Modal/components/CustomModal";

import classes from "./AppHeader.module.css";

const AppHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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

        <div onClick={onOpen}>
          <AppProfileHeader />
        </div>
      </header>
      {isOpen && (
        <CustomModal isOpen={isOpen}>
          <Sign_up onClose={onClose} />
        </CustomModal>
      )}
    </>
  );
};

export default AppHeader;

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import { SignUp } from "../SignUp";
import { AppNavigateHeader } from "./components/AppNavigateHeader";
import { AppProfileHeader } from "./components/AppProfileHeader";

import { CustomModal } from "../ui/Modal/components/CustomModal";
import logo from "../../assets/Logo.png";
import s from "./AppHeader.module.css";

const AppHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <header className={clsx("container", s.containerHeader)}>
        <div>
          <Image src={logo} alt='logo' width={182} />
        </div>

        <div>
          <AppNavigateHeader />
        </div>

        <div onClick={onOpen}>
          <AppProfileHeader />
        </div>
      </header>

      <CustomModal isOpen={isOpen} onClose={onClose}>
        <SignUp onClose={onClose} />
      </CustomModal>
    </React.Fragment>
  );
};

export { AppHeader };

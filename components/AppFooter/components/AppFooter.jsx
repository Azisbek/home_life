import React from "react";
import clsx from "clsx";

import Image from "next/image";

import { store } from "../../../store";

import whatsapp from "../../../assets/whatsapp.png";
import telegram from "../../../assets/telegram.png";

import classes from "./AppFooter.module.css";

const AppFooter = () => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;
  return (
    <footer className={clsx("container", classes.footer)}>
      <h3>Наши контакты</h3>
      <div className={classes.adressContainer}>
        <div
          className={clsx(
            isMobile ? classes.mobileNumberBlock : classes.numberBlock
          )}
        >
          <div className={classes.box}>
            <Image className={classes.icon} src={whatsapp} alt='whatsapp' />
            <div className={classes.number}>
              <span>0500743440</span>
              <span>0770161681</span>
            </div>
          </div>
          <div className={classes.box}>
            <Image className={classes.icon} src={telegram} alt='telegram' />
            <div className={classes.number}>
              <span>0771743440</span>
            </div>
          </div>
        </div>
        <span>Abdivaliev.2017@gmail.com</span>
      </div>
    </footer>
  );
};

export default AppFooter;

import React from "react";
import { observer } from "mobx-react-lite";

import { AppFooter } from "../../AppFooter";
import AppHeader from "../../AppHeader";

import { store } from "../../../store";

const AppLayout = ({ children }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;

  return (
    <>
      <>{isMobile ? <h1>Mobile header</h1> : <AppHeader />}</>

      <main className='container'>{children}</main>

      <AppFooter />
    </>
  );
};

export default observer(AppLayout);

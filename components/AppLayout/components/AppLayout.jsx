import React from "react";
import { observer } from "mobx-react-lite";

import { AppFooter } from "../../AppFooter";
import AppHeader from "../../AppHeader";

import { store } from "../../../store";
import { NavigateBar } from "../../NavigateBar";
import { MobileHeader } from "../../MobileHeader";

const AppLayout = ({ children }) => {
  const { devicesStore } = store;
  const { isMobile } = devicesStore;

  return (
    <React.Fragment>
      {isMobile ? <MobileHeader /> : <AppHeader />}

      <main className='container'>{children}</main>

      <AppFooter />

      {isMobile && <NavigateBar />}
    </React.Fragment>
  );
};

export default observer(AppLayout);

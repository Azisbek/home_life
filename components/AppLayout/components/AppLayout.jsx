import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AppFooter } from "../../AppFooter";
import AppHeader from "../../AppHeader";
import { store } from "../../../store";
import { useRouter } from "next/router";

const AppLayout = ({ children }) => {
  const { devicesStore, sidebarStore } = store;
  const { hideSidebar } = sidebarStore;
  const { isMobile } = devicesStore;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      hideSidebar();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, hideSidebar]);

  return (
    <>
      <div>{isMobile ? <h1>Mobile</h1> : <AppHeader />}</div>

      <main className='container'>{children}</main>

      <AppFooter />
    </>
  );
};

export default observer(AppLayout);

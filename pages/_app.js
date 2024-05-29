import { useEffect } from "react";
import "../styles/globals.css";
import { store } from "../store";
import AppLayout from "../components/AppLayout/components/AppLayout";

const MOBILE_WIDTH = 768;

function MyApp({ Component, pageProps }) {
  const { devicesStore } = store;

  useEffect(() => {
    const setNewWindow = () => {
      devicesStore.setWidth(window.innerWidth);
    };

    const handleResize = () => {
      setNewWindow();
    };

    if (window.innerWidth > MOBILE_WIDTH || window.innerWidth < MOBILE_WIDTH) {
      setNewWindow();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [devicesStore]);

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;

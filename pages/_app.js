import { useLayoutEffect, useState } from "react";
import { store } from "../store";
import AppLayout from "../components/AppLayout/components/AppLayout";
import "../styles/globals.css";
import { Loaders } from "../components/ui/Loaders/Loaders";

const MOBILE_WIDTH = 768;

function MyApp({ Component, pageProps }) {
  const { devicesStore } = store;
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    const setNewWindow = () => {
      if (typeof window !== "undefined") {
        devicesStore.setWidth(window.innerWidth);
      }
    };

    setNewWindow();
    setIsClient(true);

    const handleResize = () => {
      setNewWindow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [devicesStore]);

  if (!isClient) {
    return <Loaders />;
  }

  return (
    <AppLayout>
      <div id='modal-portal'></div>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;

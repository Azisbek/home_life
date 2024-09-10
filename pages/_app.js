import { useLayoutEffect, useState } from "react";
import storeRedux from "../store/store-redux/store";
import { store } from "../store";
import AppLayout from "../components/AppLayout/components/AppLayout";
import "../styles/globals.css";
import { Loaders } from "../components/ui/Loaders/Loaders";
import { Provider } from "react-redux";

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
    <Provider store={storeRedux}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;

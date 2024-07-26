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
    // Функция для установки ширины экрана
    const setNewWindow = () => {
      if (typeof window !== "undefined") {
        devicesStore.setWidth(window.innerWidth);
      }
    };

    // Устанавливаем ширину экрана при монтировании
    setNewWindow();
    setIsClient(true); // Устанавливаем флаг, что рендеринг происходит на клиенте

    const handleResize = () => {
      setNewWindow();
    };

    // Добавляем обработчик события resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Удаляем обработчик события resize при размонтировании
      window.removeEventListener("resize", handleResize);
    };
  }, [devicesStore]);

  // Не рендерим ничего, пока не завершен рендеринг на клиенте
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

import React from "react";
import useToggleMenu from "../../../hook/useToggleMenu";

export const BurgerMenu = () => {
  const { handleToggleMenu, isOpen, setIsOpen } = useToggleMenu();

  return <div>Burger</div>;
};

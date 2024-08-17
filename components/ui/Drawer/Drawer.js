import React from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import PropTypes from "prop-types";

import s from "./Drawer.module.css";

export function Drawer({ placement = "bottom", isOpen, onClose, children }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    if (isOpen && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(s.drawer, s[placement], isOpen ? s.open : s.close)}
      onClick={handleBackdropClick}
    >
      <div
        onClick={handleClick}
        className={clsx(s.drawerBody, isOpen ? s.show : s.hide)}
      >
        {children}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  placement: PropTypes.oneOf(["bottom", "top", "right", "left"]),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

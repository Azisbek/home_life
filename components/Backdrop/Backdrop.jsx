import React, { forwardRef, useEffect } from "react";
import { BackdropContainer } from "../ui/BackdropContainer/BackdropContainer";
import s from "./Backdrop.module.css";

const Backdrop = forwardRef(
  (
    {
      handleTouchEnd,
      handleTouchMove,
      handleTouchStart,
      currentY,
      isOpen,
      children,
    },
    ref
  ) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    return (
      <BackdropContainer
        currentY={currentY}
        handleTouchEnd={handleTouchEnd}
        handleTouchMove={handleTouchMove}
        handleTouchStart={handleTouchStart}
        ref={ref}
      >
        <div className={s.content}>{children}</div>
      </BackdropContainer>
    );
  }
);

Backdrop.displayName = "Backdrop";

export default Backdrop;

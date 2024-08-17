import React from "react";
import s from "./BackdropContainer.module.css";

export function BackdropContainer({
  children,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
  ref,
  currentY,
}) {
  return (
    <div
      className={s.backdrop}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateY(${currentY}px)` }}
      ref={ref}
    >
      {children}
    </div>
  );
}

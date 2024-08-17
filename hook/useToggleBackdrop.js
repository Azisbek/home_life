import { useState, useRef, useCallback } from "react";

export const useToggleBackdrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(window.innerHeight);
  const backdropRef = (useRef < HTMLDivElement) | (null > null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = useCallback(
    (e) => {
      const touchY = e.touches[0].clientY;
      const distanceY = touchY - startY;

      setCurrentY(
        isOpen ? Math.max(0, distanceY) : window.innerHeight + distanceY
      );
    },
    [startY, isOpen]
  );

  const handleTouchEnd = () => {
    if (currentY > window.innerHeight / 7) {
      setCurrentY(window.innerHeight);
      setIsOpen(false);
    } else {
      setCurrentY(0);
      setIsOpen(true);
    }
  };

  const openBackdrop = () => {
    setCurrentY(0);
    setIsOpen(true);
  };

  return {
    isOpen,
    currentY,
    backdropRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    openBackdrop,
  };
};

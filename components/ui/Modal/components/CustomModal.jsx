import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./Modal.module.css";

const CustomModal = ({ onClose, contentClass, children, isOpen }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    return (
        <div className={styles.container}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={clsx(styles.content, contentClass)}>
                <button onClick={onClose} className={styles.close}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;

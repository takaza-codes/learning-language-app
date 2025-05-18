import React from "react";
import styles from "../BaseButton/BaseButton.css";

const BaseButton = ({ onClick, children, type }) => {
    return (
        <button className={styles.baseButton} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default BaseButton;

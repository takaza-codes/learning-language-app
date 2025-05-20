import React from "react";
import styles from "./CardButton.module.scss";

function CardButton({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default CardButton;

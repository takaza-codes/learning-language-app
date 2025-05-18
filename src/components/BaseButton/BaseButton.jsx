import React from "react";
import styles from "../BaseButton/BaseButton.module.css";

const BaseButton = ({ onClick, text, type }) => {

    let className;

  switch (type) {
    case "edit":
      className = styles.edit;
      break;
    case "delete":
      className = styles.delete;
      break;
    case "save":
      className = styles.save;
      break;
    case "cancel":
      className = styles.cancel;
      break;
    default:
      className = styles.default; 
  }

    return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default BaseButton;

import { useEffect, useRef } from "react";
import styles from "./CardButton.module.scss";

function CardButton({ onClick, text }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current && buttonRef.current.focus();
  }, []);

  return (
    <button className={styles.button} onClick={onClick} ref={buttonRef}>
      {text}
    </button>
  );
}

export default CardButton;

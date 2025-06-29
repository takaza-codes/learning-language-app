import { AlertTriangle } from "lucide-react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }) => (
  <div className={styles.errorMsg}>
    <AlertTriangle size="1.2rem" />
    {message}
  </div>
);

export default ErrorMessage;

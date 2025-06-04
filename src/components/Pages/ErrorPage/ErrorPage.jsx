import { useNavigate } from "react-router-dom";
import BaseButton from "../../BaseButton/BaseButton";
import errorImage from "../../../assets/images/404gif.gif";
import styles from "./ErrorPage.module.scss";

function ErrorPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className={styles.errorWrapper}>
      <h2>We don't know what you were looking for...</h2>
      <div className={styles.errorImage}>
        <img src={errorImage} alt="Oops!" />
      </div>
      <h2>...but it's definitely not here!</h2>
      <BaseButton className={styles.goBackButton} onClick={handleGoBack}>
        Go back
      </BaseButton>
    </div>
  );
}

export default ErrorPage;

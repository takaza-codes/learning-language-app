import banner from "../../../assets/images/banner-image.png";
import styles from "./MainPage.module.scss";
import BaseButton from "../../BaseButton/BaseButton";
import joinIcon from "../../../assets/icons/join-icon.svg";
import timeIcon from "../../../assets/icons/time-icon.svg";
import resultIcon from "../../../assets/icons/result-icon.svg";

function MainPage() {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h1>
            Investing in <br />
            Knowledge and <br /> <span>Your Future</span>
          </h1>
          <BaseButton type="save">Get started!</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <img src={banner} alt="Banner" />
        </div>
      </section>
      <section className={styles.stepsContainer}>
        <h2>How does it work?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={joinIcon} alt="Create an account icon" />
            <h3>Create an account</h3>
            <p>
              Less than 5 minutes - <br />
              and you're ready to go
            </p>
          </div>
          <div className={styles.step}>
            <img src={timeIcon} alt="Invest time icon" />
            <h3>Invest time every day</h3>
            <p>
              As little or as much as you want - <br />
              regularity is key
            </p>
          </div>
          <div className={styles.step}>
            <img src={resultIcon} alt="Get results icon" />
            <h3>Get results</h3>
            <p>
              Notice your progress - <br /> it'll keep you motivated
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;

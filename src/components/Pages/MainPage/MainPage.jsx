import banner from "../../../assets/images/banner-image.png";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <section className={styles.bannerContainer}>
      <div>
        <h1>
          Investing in <br />
          Knowledge and <br /> <span>Your Future</span>
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <img src={banner} alt="Banner" />
      </div>
    </section>
  );
}

export default MainPage;

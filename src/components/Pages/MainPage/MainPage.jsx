import banner from "../../../assets/images/banner-image.png";
import styles from "./MainPage.module.scss";
import BaseButton from "../../BaseButton/BaseButton";
import joinIcon from "../../../assets/icons/join-icon.svg";
import timeIcon from "../../../assets/icons/time-icon.svg";
import resultIcon from "../../../assets/icons/result-icon.svg";
import InfoCard from "../../InfoCard/InfoCard";
import SignupForm from "../../SignupForm/SignupForm";

const steps = [
  {
    icon: joinIcon,
    alt: "Create an account icon",
    title: "Create an account",
    text: "Less than 5 minutes - \n and you're ready to go",
  },
  {
    icon: timeIcon,
    alt: "Invest time icon",
    title: "Invest time every day",
    text: "As little or as much as you want - \n regularity is key",
  },
  {
    icon: resultIcon,
    alt: "Get results icon",
    title: "Get results",
    text: "Notice your progress - \n it'll keep you motivated",
  },
];

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
          {steps.map((step, index) => (
            <InfoCard
              key={index}
              icon={step.icon}
              alt={step.alt}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </section>
      <section>
        <SignupForm />
      </section>
    </>
  );
}

export default MainPage;

import styles from "./InfoCard.module.scss";

function InfoCard({ icon, alt, title, text }) {
  return (
    <div className={styles.step}>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;

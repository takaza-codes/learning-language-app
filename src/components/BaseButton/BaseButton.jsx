import styles from "../BaseButton/BaseButton.module.scss";

const BaseButton = ({ onClick, type, form, children }) => {
  let className;

  switch (form) {
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
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default BaseButton;

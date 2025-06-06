import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";
import logo from "../../assets/images/logo5.png";
import styles from "../Header/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.MAIN}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;

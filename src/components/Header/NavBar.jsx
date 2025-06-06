import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link to={ROUTES.MAIN}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTES.LIST}>Your dictionary</Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTES.GAME}>Train with cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

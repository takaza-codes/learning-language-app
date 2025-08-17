import { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={handleToggle}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navItems} ${open ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link to={ROUTES.MAIN} onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTES.LIST} onClick={handleClose}>
            Your dictionary
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTES.GAME} onClick={handleClose}>
            Train with cards
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

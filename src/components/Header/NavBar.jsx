import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className={styles.navbar}>
      <button
        ref={buttonRef}
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={handleToggle}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul
        ref={menuRef}
        className={`${styles.navItems} ${open ? styles.open : ""}`}>
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

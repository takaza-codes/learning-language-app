import { Link } from "react-router-dom";
import ROUTES from "../../routes/routes";
import "../../App.scss";

function NavBar() {
  return (
    <nav>
      <ul className="navItems">
        <li className="navItem">
          <Link to={ROUTES.MAIN}>Home</Link>
        </li>
        <li className="navItem">
          <Link to={ROUTES.LIST}>Your dictionary</Link>
        </li>
        <li className="navItem">
          <Link to={ROUTES.GAME}>Train with cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

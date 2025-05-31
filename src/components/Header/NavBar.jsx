import { Link } from "react-router-dom";
import "../../App.scss";

function NavBar() {
  return (
    <nav>
      <ul className="navItems">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/table">Your dictionary</Link>
        </li>
        <li className="navItem">
          <Link to="/game">Train with cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo5.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;

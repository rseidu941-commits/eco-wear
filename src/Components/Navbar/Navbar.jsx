import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/products">Products</NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/dresses">Dresses</NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/jewelry">Jewelry</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

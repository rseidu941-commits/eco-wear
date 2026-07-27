import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/products" className="navbar__link">
            Products
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/dresses" className="navbar__link">
            Dresses
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/jewelry" className="navbar__link">
            Jewelry
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
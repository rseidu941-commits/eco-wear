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
          <NavLink to="/products" state={{ category: "Dresses" }}>
            Dresses
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/products" state={{ category: "Jewelry" }}>
            Jewelry
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/create">New Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

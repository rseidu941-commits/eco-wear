import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import { useCart } from "../../context/CartContext";

function Header() {
  const { cart } = useCart();
  const location = useLocation();
  const showNavbar = location.pathname === "/" || location.pathname === "/home";
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Eco Wear
        </Link>

        {showNavbar && <Navbar />}

        <div className="header__actions">
          <Link to="/cart" className="header__cart">
            🛒
            {itemCount > 0 && (
              <span className="header__cart-badge">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

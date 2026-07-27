import "./Header.scss";

import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Eco Wear
        </Link>

        <Navbar />
        <SearchBar />

        <Link to="/cart" className="header__cart">
          🛒
        </Link>
      </div>
    </header>
  );
}

export default Header;

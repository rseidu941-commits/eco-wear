import { NavLink } from "react-router-dom";

import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Sustainable Fashion for a Better Tomorrow
          </h1>

          <p className="hero__description">
            Eco Wear is dedicated to providing sustainable and ethically made
            fashion that honors both the artisan and the Earth. Discover a new
            era of conscious craftsmanship.
          </p>

          <div className="hero__buttons">
            <NavLink to="/products" className="button button--primary">
              View Products
            </NavLink>

            <NavLink to="/products" className="button button--secondary">
              Shop Now
            </NavLink>
          </div>
        </div>

        <div className="hero__image">
          <img
            src="/images/midnight-silk-dress.png"
            alt="Midnight silk blue sustainable dress"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

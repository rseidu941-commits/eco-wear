import "./ProductCard.scss";

import { Link } from "react-router-dom";

import Button from "../Button/Button";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">€{product.price}</p>

        <div className="product-card__button">
          <Link to={`/products/${product.id}`}>
            <Button>VIEW DETAILS</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
import "./ProductCard.scss";
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

        <h3 className="product-card__title">
          {product.name}
        </h3>

        <p className="product-card__price">
          €{product.price}
        </p>

        <div className="product-card__button">
          <Button text="VIEW DETAILS" />
        </div>

      </div>

    </article>
  );
}

export default ProductCard;
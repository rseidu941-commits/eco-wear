import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.scss";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductContext";

function ProductDetail() {
  const { products } = useProducts();
  const { setCart } = useCart();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail-page product-detail-page--not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="back-link">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity }];
    });

    setAdded(true);
  };

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-link">
        ← Back to Catalog
      </Link>

      <div className="product-detail">
        <div className="product-detail__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail__image"
          />
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>

          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__counter-wrapper">
            <span className="label">Quantity:</span>
            <div className="counter">
              <button type="button" onClick={decrease} className="counter__btn">
                -
              </button>
              <span className="counter__value">{quantity}</span>
              <button type="button" onClick={increase} className="counter__btn">
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="product-detail__add-btn"
          >
            Add to Cart ({quantity})
          </button>

          <div className="product-detail__eco-badge">
            🌿 100% Organic & Fair Trade Certified
          </div>

          {added && (
            <Link to="/cart" className="product-detail__view-cart">
              View Cart in Cart →
            </Link>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

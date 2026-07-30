import { Link } from "react-router-dom";
import "./Cart.scss";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, setCart } = useCart();
  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Thank you for your order!");
    setCart([]);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const ecoShipping = cart.length > 0 ? 5.0 : 0;
  const grandTotal = subtotal + ecoShipping;

  if (cart.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <h2>Your Shopping Bag is Empty</h2>
        <p>Explore our sustainable collection to add items.</p>
        <Link to="/products" className="cart-page__shop-btn">
          Explore Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__title">Your Shopping Bag</h1>

      <div className="cart-page__content">
        <div className="cart-page__items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__image"
                />

                <div className="cart-item__details">
                  <span className="cart-item__category">{item.category}</span>
                  <h3 className="cart-item__title">{item.name}</h3>
                  <p className="cart-item__price">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="cart-item__controls">
                <div className="cart-item__quantity">
                  <button
                    type="button"
                    onClick={() => handleDecrease(item.id)}
                    className="cart-item__btn"
                  >
                    -
                  </button>
                  <span className="cart-item__value">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleIncrease(item.id)}
                    className="cart-item__btn"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="cart-item__remove"
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="cart-summary__title">Order Summary</h2>

          <div className="cart-summary__row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="cart-summary__row">
            <span>Eco Shipping</span>
            <span>${ecoShipping.toFixed(2)}</span>
          </div>

          <hr className="cart-summary__divider" />

          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          <button type="button" onClick={handleCheckout} className="cart-summary__checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

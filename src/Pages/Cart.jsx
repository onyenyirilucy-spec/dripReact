
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart({
  cart,
  updateQuantity,
  clearCart,
}) {
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setCheckedOut(true);
    clearCart();
  };

  if (checkedOut) {
    return (
      <div className="cart-container success-view">
        <h2>Order Placed Successfully!</h2>
        <p>
          Thank you for your purchase. Your order is
          being processed.
        </p>

        <Link to="/shop" className="shop-more-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart Is Empty</h2>
        <p>
          Looks like you haven't added anything to
          your cart yet.
        </p>

        <Link to="/shop" className="shop-more-btn">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <p className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="checkout-btn"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}


import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import "./Component/drip.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add a product or increase its quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        { ...product, quantity: 1 },
      ];
    });
  };

  // Increase or decrease quantity
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;

            return newQuantity > 0
              ? { ...item, quantity: newQuantity }
              : null;
          }

          return item;
        })
        .filter(Boolean)
    );
  };

  // Empty the cart
  const clearCart = () => {
    setCart([]);
  };

  // Count individual units in the cart
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Router>
      <Navbar cartCount={cartCount} />

      <main className="page-contact">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/shop"
            element={<Shop addToCart={addToCart} />}
          />

          <Route path="/about" element={<About />} />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
              />
            }
          />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h2>Page Not Found</h2>
                <p>The page you requested does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

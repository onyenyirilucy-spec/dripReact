
import { Link } from "react-router-dom";
import "./drip.css";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <Link to="/" className="drip-head">
        Drip by G
      </Link>

      <div className="drip-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        <Link to="/about">About</Link>

        <Link to="/cart" className="cart-link">
          Cart

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

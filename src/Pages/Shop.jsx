
import React, { useEffect, useRef, useState } from "react";

import tableImg from "../assets/table.jpg";
import bagImg from "../assets/bag.jpg";
import bedImg from "../assets/bed.jpg";
import capImg from "../assets/cap.jpg";
import cupImg from "../assets/cup.jpg";
import earpodImg from "../assets/earpod.jpg";
import fridgeImg from "../assets/fridge.jpg";
import gadgetsImg from "../assets/gadgets.jpg";
import glassesImg from "../assets/glasses.jpg";
import headsetImg from "../assets/headset.jpg";
import heelsImg from "../assets/heels.jpg";
import mirrorImg from "../assets/mirror.jpg";
import phoneImg from "../assets/phone.jpg";
import platesImg from "../assets/plates.jpg";
import powerbankImg from "../assets/powerbank.jpg";
import wigsImg from "../assets/wigs.jpg";
import watercanImg from "../assets/watercan.jpg";
import watchImg from "../assets/watch.jpg";
import speakerImg from "../assets/speaker.jpg";
import umbrellaImg from "../assets/unbrella.jpg";

import "./shop.css";

const products = [
  { id: 1, name: "Tables", price: 500, image: tableImg },
  { id: 2, name: "Classic Bag", price: 200, image: bagImg },
  { id: 3, name: "Comfortable-Bed", price: 1000, image: bedImg },
  { id: 4, name: "Colorfull-Cups", price: 100, image: cupImg },
  { id: 5, name: "Wireless-Earpod", price: 250, image: earpodImg },
  { id: 6, name: "Fridge", price: 850, image: fridgeImg },
  { id: 7, name: "Gadgets", price: 900, image: gadgetsImg },
  { id: 8, name: "Classic Glasses", price: 300, image: glassesImg },
  { id: 9, name: "Wireless-Headset", price: 150, image: headsetImg },
  { id: 10, name: "Heels", price: 85, image: heelsImg },
  { id: 11, name: "Mirror", price: 100, image: mirrorImg },
  { id: 12, name: "Phone", price: 1200, image: phoneImg },
  { id: 13, name: "Plates", price: 30, image: platesImg },
  { id: 14, name: "Powerbank", price: 70, image: powerbankImg },
  { id: 15, name: "Caps", price: 90, image: capImg },
  { id: 16, name: "Luxurious-Wigs", price: 40, image: wigsImg },
  { id: 17, name: "Watercan", price: 20, image: watercanImg },
  { id: 18, name: "Wrist-Watch", price: 90, image: watchImg },
  { id: 19, name: "Speaker", price: 200, image: speakerImg },
  { id: 20, name: "Umbrella", price: 10, image: umbrellaImg },
];

export default function Shop({ addToCart }) {
  const [notification, setNotification] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setNotification("");
      timerRef.current = null;
    }, 2500);
  };

  return (
    <div className="shop-container">
      {notification && (
        <div className="toast-notification" role="status">
          {notification}
        </div>
      )}

      <div className="shop-page">
        <h1>Our Products</h1>
        <p className="shop-subtitle">
          Discover your next favorite item at Drip by G.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div className="products-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              <p className="text">{product.name}</p>

              <p className="price">
                ${product.price.toFixed(2)}
              </p>

              <button
                className="add"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

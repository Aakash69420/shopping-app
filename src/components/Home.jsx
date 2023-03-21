import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    navigate("/signup");
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <>
      <center><h1>Happy Shopping!</h1></center>
<div className="product-container">
      <div className="product">
        <img src="https://i.imgur.com/s2bNqdm.jpeg" alt="Product" />
        <h2>Jeans</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("Jeans")}>Add to cart</button>
      </div>
      <div className="product">
        <img src="https://i.imgur.com/VTfrRtq.jpeg" alt="Product" />
        <h2>T-Shirt</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("T-Shirt")}>Add to cart</button>
      </div>
      <div className="product">
        <img src="https://i.imgur.com/r9VLSkE.jpeg" alt="Product" />
        <h2>Hoodie</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("Hoodie")}>Add to cart</button>
      </div>
      <div className="product">
        <img src="https://i.imgur.com/ESuopXO.jpeg" alt="Product" />
        <h2>Hats</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("Hats")}>Add to cart</button>
      </div>
      <div className="product">
        <img src="https://i.imgur.com/UcZ1huv.jpeg" alt="Product" />
        <h2>Wrist Band</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("Wrist Band")}>Add to cart</button>
      </div>
      <div className="product">
        <img src="https://i.imgur.com/khELnoK.jpeg" alt="Product" />
        <h2>Sweater</h2>
        <p>Product description...</p>
        <button onClick={() => handleAddToCart("Sweater")}>Add to cart</button>
      </div>
      </div>

      <div className="cart">
        <center><h2>Cart</h2></center>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <center><button onClick={() => handleRemoveFromCart(index)}>Remove</button></center>
            </li>
          ))}
        </ul>
      </div>

      <center><button onClick={handleLogout}>Logout</button></center>
    </>
  );
}

export default Home;

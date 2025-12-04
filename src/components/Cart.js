// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return <div style={{ padding: 20 }}><h2>Košarica je prazna</h2></div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Košarica</h2>
      {cart.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
          <div><strong>{item.brand} {item.model}</strong></div>
          <div>Količina: {item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // modal state: otvoren ili ne + koji proizvod je dodan
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const openModal = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalProduct(null);
    setModalOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      modalOpen,
      modalProduct,
      openModal,
      closeModal
    }}>
      {children}
    </CartContext.Provider>
  );
};

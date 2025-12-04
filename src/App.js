// src/App.js
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CarFilter from "./components/CarFilter";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { CartProvider, CartContext } from "./context/CartContext";
import CartModal from "./components/CartModal";

function AppContent() {
  const { modalOpen, modalProduct, closeModal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    closeModal();
    navigate("/cart");
  };

  return (
    <>
      {modalOpen && (
        <CartModal product={modalProduct} onClose={closeModal} onGoToCart={handleGoToCart} />
      )}

      <Routes>
        <Route path="/" element={<CarFilter />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

// src/components/CartModal.js
import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const CartModal = ({ product, onClose, onGoToCart }) => {
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <h3>Proizvod je dodan u košaricu!</h3>
        {product && <p>{product.brand} {product.model}</p>}

        <div style={{ marginTop: 12 }}>
          <button onClick={onGoToCart} style={{ marginRight: 8 }}>Prikaži košaricu</button>
          <button onClick={onClose}>Zatvori</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

const backdropStyle = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#fff", padding: 20, borderRadius: 6, minWidth: 300, boxShadow: "0 6px 18px rgba(0,0,0,0.2)"
};

export default CartModal;

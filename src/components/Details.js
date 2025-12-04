// src/components/Details.js
import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { CartContext } from "../context/CartContext";

class DetailsComponent extends Component {
  handleAddToCart = () => {
    const { product, addToCart, openModal } = this.props;
    if (!product) return;
    addToCart(product);   // dodaj u cart (context funkcija)
    openModal(product);   // otvori modal (context funkcija)
  };

  render() {
    const { product } = this.props;
    if (!product) return <h2>Proizvod nije pronađen.</h2>;

    return (
      <div style={{ padding: "20px" }}>
        <h2>{product.brand} {product.model}</h2>
        <p><strong>Godina:</strong> {product.year}</p>
        <p><strong>Motor:</strong> {product.engine}</p>
        <p><strong>Cijena:</strong> {product.price}</p>

        <hr />
        <button onClick={this.handleAddToCart}>Dodaj u košaricu</button>
      </div>
    );
  }
}

// wrapper daje useParams i context funkcije
export default function DetailsWrapper() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  const { addToCart, openModal } = useContext(CartContext);

  return <DetailsComponent product={product} addToCart={addToCart} openModal={openModal} />;
}

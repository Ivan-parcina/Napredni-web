// src/components/Details.js
import React, { Component, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const API_URL = "http://localhost:5000/api";

class DetailsComponent extends Component {
  handleAddToCart = () => {
    const { product, addToCart, openModal } = this.props;
    if (!product) return;
    addToCart(product);   // dodaj u cart (context funkcija)
    openModal(product);   // otvori modal (context funkcija)
  };

  render() {
    const { product, loading, error } = this.props;

    if (loading) {
      return <div style={{ padding: "20px" }}><h2>Učitavanje...</h2></div>;
    }

    if (error) {
      return <div style={{ padding: "20px" }}><h2>Greška: {error}</h2></div>;
    }

    if (!product) {
      return <h2>Proizvod nije pronađen.</h2>;
    }

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

// wrapper daje useParams i context funkcije + dohvaća podatke sa API-a
export default function DetailsWrapper() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, openModal } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Dohvaćanje sa servera umjesto iz productsData
        const response = await fetch(`${API_URL}/products/${id}`);
        
        if (!response.ok) {
          throw new Error("Proizvod nije pronađen");
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <DetailsComponent 
      product={product} 
      loading={loading}
      error={error}
      addToCart={addToCart} 
      openModal={openModal} 
    />
  );
}
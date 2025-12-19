import React, { useState, useEffect } from "react";
import Results from "./Results";

const API_URL = "http://localhost:5000/api";

const CarFilter = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  // Učitaj brendove sa servera (umjesto iz products.json)
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${API_URL}/brands`);
        const data = await response.json();
        setBrands(data);
        if (data.length > 0) {
          setSelectedBrand(data[0]);
        }
      } catch (error) {
        console.error("Greška pri dohvaćanju brendova:", error);
      }
    };

    fetchBrands();
  }, []);

  // Učitaj modele kada se promijeni brend
  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrand) {
        try {
          const response = await fetch(`${API_URL}/models/${selectedBrand}`);
          const data = await response.json();
          setModels(data);
          if (data.length > 0) {
            setSelectedModel(data[0]);
          }
        } catch (error) {
          console.error("Greška pri dohvaćanju modela:", error);
        }
      }
    };

    fetchModels();
  }, [selectedBrand]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Poziv API-a umjesto filtriranja productsData
      const response = await fetch(
        `${API_URL}/filter?brand=${selectedBrand}&model=${selectedModel}`
      );
      const data = await response.json();
      setFiltered(data);
    } catch (error) {
      console.error("Greška pri filtriranju:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Filtriraj automobile</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Marka: </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <br />

        <div>
          <label>Model: </label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Filtriranje..." : "Filtriraj"}
        </button>
      </form>

      <Results data={filtered} />
    </div>
  );
};

export default CarFilter;
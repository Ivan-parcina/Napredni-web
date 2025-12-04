import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import Results from "./Results";

const CarFilter = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  const [filtered, setFiltered] = useState([]);

  // Učitaj brendove
  useEffect(() => {
    const uniqueBrands = [...new Set(productsData.map((p) => p.brand))];
    setBrands(uniqueBrands);
    setSelectedBrand(uniqueBrands[0]);
  }, []);

  // Učitaj modele kada se promijeni brend
  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = productsData
        .filter((p) => p.brand === selectedBrand)
        .map((p) => p.model);

      const unique = [...new Set(filteredModels)];
      setModels(unique);
      setSelectedModel(unique[0]);
    }
  }, [selectedBrand]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = productsData.filter(
      (p) => p.brand === selectedBrand && p.model === selectedModel
    );

    setFiltered(result);
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
        <button type="submit">Filtriraj</button>
      </form>

      <Results data={filtered} />
    </div>
  );
};

export default CarFilter;

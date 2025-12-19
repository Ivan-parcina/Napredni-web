const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock baza podataka
const products = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "Golf",
    year: 2019,
    engine: "1.5 TSI",
    price: "18,000€"
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "Passat",
    year: 2018,
    engine: "2.0 TDI",
    price: "22,500€"
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2020,
    engine: "2.0 TDI",
    price: "28,000€"
  },
  {
    id: 4,
    brand: "BMW",
    model: "320d",
    year: 2020,
    engine: "2.0 Diesel",
    price: "28,900€"
  },
  {
    id: 5,
    brand: "BMW",
    model: "X5",
    year: 2021,
    engine: "3.0 Diesel",
    price: "52,000€"
  },
  {
    id: 6,
    brand: "BMW",
    model: "520d",
    year: 2019,
    engine: "2.0 Diesel",
    price: "35,000€"
  },
  {
    id: 7,
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    engine: "1.8 Hybrid",
    price: "24,200€"
  },
  {
    id: 8,
    brand: "Toyota",
    model: "RAV4",
    year: 2022,
    engine: "2.5 Hybrid",
    price: "32,500€"
  },
  {
    id: 9,
    brand: "Audi",
    model: "A4",
    year: 2020,
    engine: "2.0 TDI",
    price: "35,000€"
  },
  {
    id: 10,
    brand: "Audi",
    model: "Q5",
    year: 2021,
    engine: "2.0 TFSI",
    price: "48,000€"
  },
  {
    id: 11,
    brand: "Mercedes",
    model: "C220d",
    year: 2020,
    engine: "2.0 Diesel",
    price: "38,500€"
  },
  {
    id: 12,
    brand: "Mercedes",
    model: "GLC",
    year: 2021,
    engine: "2.0 Diesel",
    price: "49,000€"
  }
];

// API Routes

// GET /api/products - Dohvati sve proizvode
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id - Dohvati proizvod po ID-u
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Proizvod nije pronađen' });
  }
});

// GET /api/brands - Dohvati sve jedinstvene brendove
app.get('/api/brands', (req, res) => {
  const brands = [...new Set(products.map(p => p.brand))];
  res.json(brands);
});

// GET /api/models/:brand - Dohvati modele za određeni brend
app.get('/api/models/:brand', (req, res) => {
  const brand = req.params.brand;
  const models = products
    .filter(p => p.brand === brand)
    .map(p => p.model);
  
  const uniqueModels = [...new Set(models)];
  res.json(uniqueModels);
});

// GET /api/filter - Filtriraj automobile po brendu i modelu
app.get('/api/filter', (req, res) => {
  const { brand, model } = req.query;
  
  let filtered = products;
  
  if (brand) {
    filtered = filtered.filter(p => p.brand === brand);
  }
  
  if (model) {
    filtered = filtered.filter(p => p.model === model);
  }
  
  res.json(filtered);
});

// Pokreni server
app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`GET /api/products - Svi proizvodi`);
  console.log(`GET /api/products/:id - Proizvod po ID-u`);
  console.log(`GET /api/brands - Svi brendovi`);
  console.log(`GET /api/models/:brand - Modeli za brend`);
  console.log(`GET /api/filter?brand=X&model=Y - Filtriraj`);
});
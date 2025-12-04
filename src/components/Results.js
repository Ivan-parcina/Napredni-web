import React from "react";
import { useNavigate } from "react-router-dom";

const Results = ({ data }) => {
  const navigate = useNavigate();

  if (data.length === 0) return <p>Nema rezultata.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Rezultati</h3>

      {data.map((car) => (
        <div key={car.id} style={{ marginBottom: "10px" }}>
          <strong>
            {car.brand} {car.model}
          </strong>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => navigate(`/details/${car.id}`)}
          >
            Detalji
          </button>
        </div>
      ))}
    </div>
  );
};

export default Results;

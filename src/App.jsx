import { useState } from "react";

import "./App.css";
import planMagasin from "./assets/plan-magasin.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [height, setHeight] = useState("");
  const [selectedBassin, setSelectedBassin] = useState(null);

  const bassinInfos = {
    1: { length: 6, width: 1.3 },
    2: { length: 5, width: 1.5 },
    3: { length: 4, width: 1.2 },
    4: { length: 3.5, width: 1.3 },
    5: { length: 6.2, width: 1.4 },
    6: { length: 4.5, width: 1.1 },
    7: { length: 3.8, width: 1.25 },
    8: { length: 5.5, width: 1.6 },
    9: { length: 4.2, width: 1.35 },
    10: { length: 3.9, width: 1.2 },
    11: { length: 4.7, width: 1.4 },
    12: { length: 5.1, width: 1.5 },
    13: { length: 6.3, width: 1.7 },
    14: { length: 4.6, width: 1.3 },
    15: { length: 3.3, width: 1.2 },
    16: { length: 5.4, width: 1.6 },
    17: { length: 4.8, width: 1.35 },
    18: { length: 6.1, width: 1.45 },
    19: { length: 5.3, width: 1.25 },
    20: { length: 3.6, width: 1.1 },
    21: { length: 5.8, width: 1.5 },
    22: { length: 4.1, width: 1.4 },
    23: { length: 3.7, width: 1.3 },
  };

  const length = 6;
  const width = 1.3;
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const parsedHeight = parseFloat(height);
    if (!isNaN(parsedHeight)) {
      if (selectedBassin) {
        setResult(selectedBassin.length * selectedBassin.width * parsedHeight);
      }
    }
  };

  return (
    <>
      <h1>Calcul des volumes des bassins de St-Pierre</h1>
      <div className="content-layout">
        <img src={planMagasin} alt="Plan du magasin" className="plan-magasin" />

        <div className="buttons-grid">
          {[...Array(23)].map((_, index) => (
            <button
              key={index + 1}
              className="store-button"
              onClick={() => {
                const bassinData = bassinInfos[index + 1];
                setSelectedBassin(bassinData);
                setShowModal(true);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Calcul du volume</h2>
            <p>Longueur: {selectedBassin?.length}m</p>
            <p>Largeur: {selectedBassin?.width}m</p>
            <label>Hauteur (m) :</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Entrez la hauteur"
            />
            <button onClick={handleCalculate}>Calculer</button>
            {result !== null && (
              <p className="resultat">Volume : {result.toFixed(2)} m³</p>
            )}
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedBassin(null);
                setHeight("");
                setResult(null);
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

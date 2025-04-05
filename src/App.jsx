import { useState } from "react";

import "./App.css";
import planMagasin from "./assets/plan-magasin.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [height, setHeight] = useState("");
  const [selectedBassin, setSelectedBassin] = useState(null);

  const bassinInfos = {
    1: { length: 3, width: 1.2, volumeConstant: 4.5 },
    2: { length: 4.5, width: 1.2, volumeConstant: 1 },
    3: { length: 2.5, width: 1.2, volumeConstant: 1 },
    4: { length: 2.5, width: 2, volumeConstant: 1 },
    5: { length: 2.5, width: 2, volumeConstant: 1 },
    6: { length: 2.5, width: 2, volumeConstant: 1 },
    7: { length: 5, width: 2, volumeConstant: 1 },
    8: { length: 5.5, width: 1.6, volumeConstant: 0 },
    9: { length: 4, width: 1.3, volumeConstant: 1.5 },
    10: { length: 4, width: 1.3, volumeConstant: 1.5 },
    11: { length: 4, width: 1.3, volumeConstant: 1.5 },
    12: { length: 4, width: 1.3, volumeConstant: 1 },
    13: { length: 3, width: 1.7, volumeConstant: 1 },
    14: { length: 3, width: 1.7, volumeConstant: 1 },
    15: { length: 3, width: 1.7, volumeConstant: 1 },
    16: { length: 3, width: 1.7, volumeConstant: 1.8 },
    17: { length: 8, width: 3, volumeConstant: 4 },
    18: { length: 2, width: 1.3, volumeConstant: 0 },
    19: { length: 2, width: 1.3, volumeConstant: 0 },
    20: { length: 2, width: 1.3, volumeConstant: 0 },
    21: { length: 5, width: 4, volumeConstant: 0 },
    22: { length: 5, width: 4, volumeConstant: 0 },
    23: { length: 1.5, width: 1, volumeConstant: 0.15 },
    24: { length: 1.5, width: 1, volumeConstant: 0.15 },
    25: { length: 1.5, width: 1, volumeConstant: 0.15 },
    26: { length: 1.5, width: 1, volumeConstant: 0.15 },
    27: { length: 1.5, width: 1, volumeConstant: 0.15 },
    28: { length: 1.5, width: 1, volumeConstant: 0.15 },
  };

  const length = 6;
  const width = 1.3;
  const [result, setResult] = useState(null);

  // Fonction de calcul
  const handleCalculate = () => {
    const parsedHeight = parseFloat(height);
    if (!isNaN(parsedHeight)) {
      if (selectedBassin) {
        setResult(
          selectedBassin.length * selectedBassin.width * parsedHeight +
            (selectedBassin.volumeConstant || 0)
        );
      }
    }
  };

  return (
    <>
      <h1>Calcul des volumes des bassins de St-Pierre</h1>
      <div className="content-layout">
        <img src={planMagasin} alt="Plan du magasin" className="plan-magasin" />

        <div className="buttons-grid">
          {[...Array(28)].map((_, index) => (
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

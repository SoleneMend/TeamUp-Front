import { useState } from "react";
import "./CardSessions.css";

interface CardSessionsProps {
  imageUrl: string;
}

type ActiveInfo = "A" | "B" | "C" | "D" | null;

function CardSessions({ imageUrl }: CardSessionsProps) {
  const [flipped, setFlipped] = useState(false);
  const [activeInfo, setActiveInfo] = useState<ActiveInfo>(null);

  return (
    <>
      <div className={`flip-cardSessions ${flipped ? "flipped" : ""}`}>
        <div className="flip-cardSessions-container">
          <div
            className="flip-cardSessions-front"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <span className="cardSessions-badge">NOM DU SPORT</span>
            <p className="cardSessions-title">NOM DE L'EVENEMENT</p>
            <p>LOCALISATION DE L'EVENEMENT</p>
            <button
              type="button"
              className="flip-cardSession-button"
              onClick={() => setFlipped(!flipped)}
            >
              Informations
            </button>
          </div>

          <div className="flip-cardSessions-back">
            <p className="cardSessions-title">Nom de l'event</p>
            <div className="cardSessions-back-infos">
              <div className="cardSessions-back-info-A">
                Date de l'event
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={() => setActiveInfo("A")}
                >
                  ...
                </button>
              </div>
              <div className="cardSessions-back-info-B">
                Horaires de l'event
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={() => setActiveInfo("B")}
                >
                  +
                </button>
              </div>
              <div className="cardSessions-back-info-C">
                TeamUp players
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={() => setActiveInfo("C")}
                >
                  +
                </button>
              </div>
              <div className="cardSessions-back-info-D">
                Places restantes
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={() => setActiveInfo("D")}
                >
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              className="flip-cardSession-button"
              onClick={() => setFlipped(!flipped)}
            >
              Retourner
            </button>
          </div>
        </div>
      </div>

      {activeInfo !== null && (
        <>
          <div className="cardSessions-overlay">
            <button type="button" onClick={() => setActiveInfo(null)}></button>
          </div>
          <div className="cardSessions-modal">
            {activeInfo === "A" && <p>Détails date</p>}
            {activeInfo === "B" && <p>Détails horaires</p>}
            {activeInfo === "C" && <p>Détails players</p>}
            {activeInfo === "D" && <p>Détails places restantes</p>}
            <button type="button" onClick={() => setActiveInfo(null)}>
              Fermer
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default CardSessions;

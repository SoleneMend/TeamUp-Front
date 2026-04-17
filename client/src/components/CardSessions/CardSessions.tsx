import { useState } from "react";
import "./CardSessions.css";

interface CardSessionsProps {
  imageUrl: string;
}

function CardSessions({ imageUrl }: CardSessionsProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-cardSessions ${flipped ? "flipped" : ""}`}>
      <div className="flip-cardSessions-container">
        <div
          className="flip-cardSessions-front"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <span className="cardSessions-badge">NOM DU SPORT</span>
          <p className="cardSessions-title">NOM DE L'EVENEMENT</p>
          <p>LOCALISATION DE L'EVENTENEMENT</p>
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
            <div className="cardSessions-back-info-A"> Date de l'event</div>
            <div className="cardSessions-back-info-B"> Horaires de l'event</div>
            <div className="cardSessions-back-info-C"> TeamUp players </div>
            <div className="cardSessions-back-info-D"> Places restantes </div>
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
  );
}

export default CardSessions;

import { useState } from "react";
import "./CardSessions.css";

function CardSessions() {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <div className={`flip-cardSessions ${flipped ? "flipped" : ""}`}>
        <div className="flip-cardSessions-inner">
          <div className="flip-cardSessions-front">
            <p className="cardSessions-title">FLIP CARD</p>
            <p>Cliquez le bouton</p>
          </div>
          <div className="flip-cardSessions-back">
            <p className="cardSessions-title">BACK</p>
            <p>Retournée !</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setFlipped(!flipped)}>
        Retourner
      </button>
    </>
  );
}

export default CardSessions;

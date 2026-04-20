import { MapPinned, Calendar, Clock, Users } from "lucide-react";
import { useState } from "react";
import type { Event } from "../../services/useEvents";
import "./CardSessions.css";

interface CardSessionsProps {
  event: Event;
}

function CardSessions({ event }: CardSessionsProps) {
  const [flipped, setFlipped] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`flip-cardSessions ${flipped ? "flipped" : ""}`}>
        <div className="flip-cardSessions-container">
          <div
            className="flip-cardSessions-front"
            style={{ backgroundImage: `url(${event.img_url_event})` }}
          >
            <span className="cardSessions-badge">{event.sport?.name}</span>
            <p className="cardSessions-title">{event.name}</p>
            <p>{event.localisation}</p>
            <button
              type="button"
              className="flip-cardSession-button"
              onClick={() => setFlipped(!flipped)}
            >
              Informations
            </button>
          </div>

          <div className="flip-cardSessions-back">
            <p className="cardSessions-title">{event.name}</p>
            <div className="cardSessions-back-infos">
              <div className="cardSessions-back-info-A">
                <Calendar size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">DATE</span>
                <span className="cardSessions-info-value">{event.date}</span>
              </div>
              <div className="cardSessions-back-info-B">
                <Clock size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">HORAIRE</span>
                <span className="cardSessions-info-value">{event.heure}</span>
              </div>
              <div className="cardSessions-back-info-C">
                <Users size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">JOUEURS</span>
                <span className="cardSessions-info-value">
                  {event.people_joining?.length ?? 0} / {event.max_people}
                </span>
              </div>
              <div className="cardSessions-back-info-D">
                <MapPinned size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">LIEUX DU RDV</span>
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={() => setModalOpen(true)}
                >
                  Voir
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

      {modalOpen && (
        <>
          <div className="cardSessions-overlay">
            <button type="button" onClick={() => setModalOpen(false)}></button>
          </div>
          <div className="cardSessions-modal">
            <p>{event.description}</p>
            <button type="button" onClick={() => setModalOpen(false)}>
              Fermer
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default CardSessions;

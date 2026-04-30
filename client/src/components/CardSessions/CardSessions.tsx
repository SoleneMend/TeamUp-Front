import { Calendar, CircleX, Clock, Info, MapPinned, Users } from "lucide-react";
import { useState } from "react";
import type { EventType } from "../../services/useEvents";
import "./CardSessions.css";

interface CardSessionsProps {
  event: EventType;
  isActive?: boolean;
  onClick?: () => void;
}

function CardSessions({ event, isActive, onClick }: CardSessionsProps) {
  const [flipped, setFlipped] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`flip-cardSessions ${flipped ? "flipped" : ""} ${isActive ? "flip-cardSessions--active" : ""}`}
        onClick={onClick}
      >
        <div className="flip-cardSessions-container">
          <div className="flip-cardSessions-front">
            <div
              className="flip-cardSessions-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.60)), url(${event.sport.image})`,
              }}
            />
            <div className="cardSessions-front-text-global">
              <div className="cardSessions-front-text">
                <span className="cardSessions-badge">{event.sport.name}</span>
                <h2 className="cardSessions-title">{event.name}</h2>
                <h3 className="cardSessions-undertitle">{event.description}</h3>
              </div>
            </div>
            <button
              type="button"
              className="flip-cardSession-button"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(!flipped);
              }}
            >
              <Info />
            </button>
          </div>

          <div className="flip-cardSessions-back">
            <h2 className="cardSessions-title-back">{event.name}</h2>
            <div className="cardSessions-back-infos">
              <div className="cardSessions-back-info-A">
                <Calendar size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">DATE</span>
                <span className="cardSessions-info-value">
                  {event.date.slice(0, 10)}
                </span>
              </div>
              <div className="cardSessions-back-info-B">
                <Clock size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">HORAIRE</span>
                <span className="cardSessions-info-value">
                  {event.date.slice(11, 16)}
                </span>
              </div>
              <div className="cardSessions-back-info-C">
                <Users size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">JOUEURS</span>
                <span className="cardSessions-info-value">
                  {event.user_joining?.length ?? 0} / {event.max_people}
                </span>
              </div>
              <div className="cardSessions-back-info-D">
                <MapPinned size={20} className="cardSessions-info-icon" />
                <span className="cardSessions-info-label">LIEUX DU RDV</span>
                <button
                  type="button"
                  className="cardSessions-modal-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(true);
                  }}
                >
                  Voir
                </button>
              </div>
            </div>
            <button
              type="button"
              className="flip-cardSession-button-bottom"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(!flipped);
              }}
            >
              <CircleX />
            </button>
          </div>
        </div>
      </button>
      {modalOpen && (
        <>
          <div className="cardSessions-overlay">
            <button type="button" onClick={() => setModalOpen(false)}></button>
          </div>
          <div className="cardSessions-modal">
            <div className="cardSessions-modal-map">
              <iframe
                title="Localisation"
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`}
              />
            </div>
            <div className="cardSessions-modal-info">
              <div className="cardSessions-modal-title-group">
                <MapPinned size={23} className="cardSessions-info-icon" />
                <h3 className="cardSessions-modal-title">Localisation</h3>
              </div>
              <p className="cardSessions-modal-location">{event.location}</p>
              <button
                type="button"
                className="cardSessions-modal-close"
                onClick={() => setModalOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CardSessions;

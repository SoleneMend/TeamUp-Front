import { useEffect, useState } from "react";
import CardSessions from "../../components/CardSessions/CardSessions";
import Chatbot from "../../components/Chatbot/Chatbot";
import type { EventType } from "../../services/useEvents";
import "./Sessions.css";

function Sessions() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/bdd/events?host=bob_pro&user_joining=bob_pro")
      .then((res) => res.json())
      .then((data) => setFilteredEvents(data));
  });

  return (
    <div className="sessions-wrap">
      <h1>Mes Sessions</h1>
      <section className="sessionsCards-container">
        <div className="sessions-grid">
          {/* Colonne gauche : appelle les SessionsCards */}
          <div className="sessions-col-cards">
            <h2>Mes prochains events</h2>
            {filteredEvents.map((event, index) => (
              <CardSessions
                key={event.id}
                event={event}
                isActive={selectedEvent?.id === event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setSelectedIndex(index);
                }}
              />
            ))}
          </div>

          {/* Colonne droite : le chatbox que les cards appellent */}
          <div className="sessions-col-chat">
            <h2>Contact session</h2>
            {selectedEvent ? (
              <div
                className="sessions-chatbox-wrapper"
                style={{
                  paddingTop: `calc(${selectedIndex} * (320px + 1rem) + 1rem)`,
                }}
              >
                <Chatbot
                  event={selectedEvent}
                  mode="session"
                  onClose={() => {
                    setSelectedEvent(null);
                    setSelectedIndex(0);
                  }}
                />
              </div>
            ) : (
              <p className="sessions-placeholder">
                Clique sur une session pour démarrer le TeamUp chat!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sessions;

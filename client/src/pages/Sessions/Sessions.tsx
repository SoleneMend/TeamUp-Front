import { useState } from "react";
import CardSessions from "../../components/CardSessions/CardSessions";
import Chatbot from "../../components/Chatbot/Chatbot";
import type { Event } from "../../services/useEvents";
import useEvents from "../../services/useEvents";
import "./Sessions.css";

function Sessions() {
  const events = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter((e) =>
    [1, 2, 15, 17, 28, 47, 49].includes(e.id),
  );

  return (
    <div className="sessions-wrap">
      <h1>Mes Sessions</h1>
      <section className="sessionsCards-container">
        <div className="sessions-grid">
          {/* Colonne gauche : appelle les SessionsCards */}
          <div className="sessions-col-cards">
            <h2>Mes prochains events</h2>
            {filteredEvents.map((event) => (
              <CardSessions
                key={event.id}
                event={event}
                isActive={selectedEvent?.id === event.id}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>

          {/* Colonne droite : le chatbox que les cards appellent */}
          <div className="sessions-col-chat">
            <h2>Contact session</h2>
            {selectedEvent ? (
              <Chatbot event={selectedEvent} />
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

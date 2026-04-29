import { Link } from "react-router";
import type { EventType } from "../../services/useEvents";
import "./EventsCard.css";

type Props = {
  event: EventType;
};

function EventsCard({ event }: Props) {
  const spotsLeft = event.max_people - (event.user_joining?.length ?? 0);

  function joinEvent() {
    fetch("http://localhost:3310/bdd/add/event_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_id: event.id,
        user_id: 2, // because we are bob for now
      }),
    });
  }

  return (
    <div className="card">
      <img src={event.sport.image} alt={event.name} />

      <div className="card-header">
        <h3>{event.name}</h3>
      </div>

      <div className="card-body">
        <p className="location">📍 {event.location}</p>
        <p className="date">
          🕐 {`${event.date.slice(5, 10)} ${event.date.slice(11, 16)}`}
        </p>

        {event.user_joining && event.user_joining.length > 0 && (
          <div className="participants">
            {event.user_joining.map((user: string) => (
              <img
                key={user}
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user}`}
                alt={user}
                className="avatar"
                title={user}
              />
            ))}
            <span className="places-restantes">
              {spotsLeft} places restantes
            </span>
          </div>
        )}
        <Link to="/Sessions">
          <button
            type="button"
            className="join-btn"
            onClick={() => {
              joinEvent();
            }}
          >
            {" "}
            Rejoindre l'évènement
          </button>
        </Link>
      </div>
    </div>
  );
}
export default EventsCard;

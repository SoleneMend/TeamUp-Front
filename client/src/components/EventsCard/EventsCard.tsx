import { Link } from "react-router";
import type { Event } from "../../services/useEvents";
import "./EventsCard.css";

type Props = {
  event: Event;
};

function EventsCard({ event }: Props) {
  const spotsLeft = event.max_people - (event.people_joining?.length ?? 0);

  return (
    <div className="card">
      <img src={event.img_url_event} alt={event.name} />

      <div className="card-header">
        <h3>{event.name}</h3>
      </div>

      <div className="card-body">
        <p className="location">📍 {event.localisation}</p>
        <p className="date">
          🕐 {event.date}, {event.heure}
        </p>

        {event.people_joining && event.people_joining.length > 0 && (
          <div className="participants">
            {event.people_joining.map((user) => (
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
          <button type="button" className="join-btn">
            {" "}
            Rejoindre l'évènement
          </button>
        </Link>
      </div>
    </div>
  );
}
export default EventsCard;

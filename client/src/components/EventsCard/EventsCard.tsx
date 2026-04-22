import type { Event } from "../../services/useEvents";

type Props = {
  event: Event;
};

function EventsCard({ event }: Props) {
  return (
    <div className="card">
      {event.id && <span className="badge">✔ Evènements verifiés</span>}
      {event.name && (
        <span className="badge">{event.people_joining} Places restantes</span>
      )}

      <img src={event.img_url_event} alt={event.name} />

      <div className="card-body">
        <div className="card-header">
          <h3>{event.name}</h3>
        </div>
        <p className="location">📍 {event.localisation}</p>
        <p className="date">
          🕐 {event.date}, {event.heure}
        </p>
        <button type="button" className="join-btn">
          {" "}
          Rejoindre l'évènement
        </button>
      </div>
    </div>
  );
}
export default EventsCard;

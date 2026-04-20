type Match = {
  id: number;
  title: string;
  location: string;
  distance: string;
  date: string;
  time: string;
  level: string;
  price: number;
  spotsLeft?: number;
  verified?: boolean;
  image: string;
};

type Props = {
  event: Match;
};

function EventsCard({ event }: Props) {
  return (
    <div className="card">
      {event.verified && <span className="badge">✔ Evènements verifiés</span>}
      {event.spotsLeft && (
        <span className="badge">{event.spotsLeft} Places restantes</span>
      )}

      <img src={event.image} alt={event.title} />

      <div className="card-body">
        <div className="card-header">
          <h3>{event.title}</h3>
        </div>
        <p className="location">
          📍 {event.location} ({event.distance})
        </p>
        <p className="date">
          🕐 {event.date}, {event.time}
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

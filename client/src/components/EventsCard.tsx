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
  match: Match;
};

function EventsCard({ match }: Props) {
  return (
    <div className="card">
      {match.verified && <span className="badge">✔ Evenement verifié</span>}
      {match.spotsLeft && (
        <span className="badge">{match.spotsLeft} Places restantes</span>
      )}

      <img src={match.image} alt={match.title} />

      <div className="card-body">
        <div className="card-header">
          <h3>{match.title}</h3>
          <span className="price">£{match.price}</span>
        </div>
        <p className="location">
          📍 {match.location} ({match.distance})
        </p>
        <p className="date">
          🕐 {match.date}, {match.time}
        </p>
        <p className="level">
          ⚡ Skill: <strong>{match.level}</strong>
        </p>

        <button type="button" className="join-btn">
          {" "}
          Rejoindre l'événement
        </button>
      </div>
    </div>
  );
}
export default EventsCard;

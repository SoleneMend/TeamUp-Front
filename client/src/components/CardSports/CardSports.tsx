import { Link } from "react-router";
import type { Sports } from "../../services/useSports";
import "./CardSports.css";

interface CardSportsProps {
  s: Sports;
}

function CardSports({ s }: CardSportsProps) {
  return (
    <div
      className="cardSports_Wrap"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.40)), url(${s.sport.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cardSports_Content">
        <h3>{s.sport.name}</h3>
        <p>{s.description}</p>
        <Link to="/explorer" className="cardSports_Content-link">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default CardSports;

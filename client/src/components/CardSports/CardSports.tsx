import { Link } from "react-router";
import type { Sports } from "../../services/useSports";
import "./CardSports.css";

interface CardSportsProps {
  sports: Sports;
}

function CardSports({ sports }: CardSportsProps) {
  return (
    <div
      className="cardSports_Wrap"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.40)), url(${sports.img_url_event})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cardSports_Content">
        <h3>{sports.sport?.name}</h3>
        <p>{sports.description}</p>
        <Link to="/explorer" className="cardSports_Content-link">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default CardSports;

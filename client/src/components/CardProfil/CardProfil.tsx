import "./CardProfil.css";
import defaultAvatar from "../../assets/images/avatar.png";
import { MapPin } from "lucide-react";

interface CardProfilProps {
  name: string;
  bio?: string;
  url_image?: string;
  location: string;
}

const CardProfil = ({
  name,
  bio = "Passionné de sport et toujours prêt pour un nouveau défi.",
  url_image = defaultAvatar,
  location,
}: CardProfilProps) => {
  return (
    <div className="card-profil">
      <div className="card-profil__image">
        <img src={url_image} alt={name} />
      </div>
      <div className="card-profil__content">
        <h2 className="card-profil__name">{name}</h2>
        <p className="card-profil__bio">{bio}</p>
        <span className="card-profil__location">
          <MapPin size={16} />
          {location}
        </span>{" "}
      </div>
      <button type="button" className="card-profil__button">
        Edit profile
      </button>
    </div>
  );
};

export default CardProfil;

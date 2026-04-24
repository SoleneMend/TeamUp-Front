import "./CardProfil.css";
import { MapPin, Pencil } from "lucide-react";
import defaultAvatar from "../../assets/images/avatar.png";

interface CardProfilProps {
  name: string;
  bio?: string;
  url_image?: string;
  location: string;
}

const CardProfil = ({ name, bio, url_image, location }: CardProfilProps) => {
  return (
    <div className="card-profil">
      <div className="card-profil__image">
        <img src={url_image ?? defaultAvatar} alt={name} />
      </div>
      <div className="card-profil__content">
        <h2 className="card-profil__name">{name}</h2>
        <p className="card-profil__bio">{bio}</p>
        <div className="card-profil__bottom">
          <span className="card-profil__location">
            <MapPin size={16} />
            {location}
          </span>
          <button type="button" className="card-profil__button">
            <Pencil size={16} />
            Edit profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProfil;

import "./CardSports.css";

type CardSportsProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

function CardSports({ name, description, image, link }: CardSportsProps) {
  return (
    <div
      className="cardSports_Wrap"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="cardSports_Content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link}>Explore</a>
      </div>
    </div>
  );
}

export default CardSports;

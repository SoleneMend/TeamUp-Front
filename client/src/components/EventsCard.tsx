type Match = {
  title: string;
  location: string;
  date: string;
  level: string;
  price: number;
};
type Props = {
  match: Match;
};

function EventsCard({ match }: Props) {
  return (
    <div className="card">
      <h3>{match.title}</h3>
      <p>{match.location}</p>
    </div>
  );
}
export default EventsCard;

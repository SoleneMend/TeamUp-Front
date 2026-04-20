import CardSessions from "../../components/CardSessions/CardSessions";
import useEvents from "../../services/useEvents";
import "./Sessions.css";

function Sessions() {
  const events = useEvents();

  return (
    <div>
      {events.map((event) => (
        <CardSessions key={event.id} imageUrl={event.image_url} />
      ))}
    </div>
  );
}

export default Sessions;

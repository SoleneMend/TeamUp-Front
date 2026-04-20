import CardSessions from "../../components/CardSessions/CardSessions";
import useEvents from "../../services/useEvents";
import "./Sessions.css";

function Sessions() {
  const events = useEvents();

  return (
    <div>
      {events.map((event) => (
        <CardSessions key={event.id} imageUrl={event.img_url_event} />
      ))}
    </div>
  );
}

export default Sessions;

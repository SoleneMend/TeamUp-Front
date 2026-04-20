import EventsCard from "../../components/EventsCard/EventsCard";
import Filters from "../../components/Filters/Filters";
import useEvents from "../../services/useEvents";
import "./Explorer.css";

function Explorer() {
  const events = useEvents();

  return (
    <main className="content">
      <div className="layout">
        <Filters />

        <div className="right-content">
          <div className="upcoming-list">
            <h2>Évènements à venir</h2>
            <div className="horizontal-card">
              {events.slice(0, 2).map((event) => (
                <EventsCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          <section>
            <h2>Tous les évènements</h2>

            <div className="events-grid">
              {events.map((event) => (
                <EventsCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Explorer;

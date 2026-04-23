import { useState } from "react";
import EventsCard from "../../components/EventsCard/EventsCard";
import Filters from "../../components/Filters/Filters";
import useEvents from "../../services/useEvents";
import "./Explorer.css";

function Explorer() {
  const [city, setCity] = useState("");
  const events = useEvents();

  const filteredEvents = events.filter((e) =>
    e.localisation?.toLowerCase().includes(city.toLowerCase()),
  );

  return (
    <main className="content">
      <div className="layout">
        <Filters city={city} setCity={setCity} />

        <div className="right-content">
          <section>
            <div className="events-grid">
              {filteredEvents.map((event) => (
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

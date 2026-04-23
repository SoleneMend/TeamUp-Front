import { useState } from "react";
import EventsCard from "../../components/EventsCard/EventsCard";
import Filters from "../../components/Filters/Filters";
import useEvents from "../../services/useEvents";

function Explorer() {
  const [city, setCity] = useState("");
  const events = useEvents();
  const [findSport, setFindSport] = useState("");
  // const filteredSport = events.filter((s) =>
  //   s.sport?.name.toLocaleLowerCase().includes(findSport.toLocaleLowerCase()),
  // );
  const filteredEvents = events.filter((e) =>
    e.localisation?.toLowerCase().includes(city.toLowerCase()),
  );

  return (
    <main className="content">
      <div className="layout">
        <Filters
          city={city}
          setCity={setCity}
          findSport={findSport}
          setFindSport={setFindSport}
        />

        <div className="right-content">
          <div className="upcoming-list">
            {/* <h2>Évènements à venir</h2>
            <div className="horizontal-card">
              {filteredEvents.slice(0, 2).map((event) => (
                <EventsCard key={event.id} event={event} />
              ))}
            </div> */}
          </div>

          <section>
            {/* <h2>Tous les évènements</h2> */}

            <div className="events-grid">
              {filteredEvents.map((event) => (
                <EventsCard key={event.id} event={event} />
              ))}
              {/* {filteredSport.map((sport)=> (
                <EventsCard key={sport.id} event
              ))} */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Explorer;

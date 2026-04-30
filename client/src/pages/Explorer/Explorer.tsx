import { useEffect, useState } from "react";
import EventsCard from "../../components/EventsCard/EventsCard";
import Filters from "../../components/Filters/Filters";
import type { EventType } from "../../services/useEvents";
import "./Explorer.css";

function Explorer() {
  // const [event, setEvent] = useState("");
  // > const events = useEvents();
  // // const [findSport, setFindSport] = useState("");
  // const filteredSport = events.filter((s) =>
  //   s.sport?.name.toLocaleLowerCase().includes(findSport.toLocaleLowerCase()),
  // );
  // const filteredEvents = events.filter((e) =>
  //   e.localisation?.toLowerCase().includes(city.toLowerCase()),
  // );

  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch(
      "http://localhost:3310/bdd/events?nothost=bob_pro&notuser_joining=bob_pro",
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const [filtreSport, setFiltreSport] = useState<string>("");
  const [filtreVille, setFiltreVille] = useState<string>("");
  const [filtreDate, setFiltreDate] = useState<string>("");
  const reinitialiserFiltres = () => {
    setFiltreSport("");
    setFiltreVille("");
    setFiltreDate("");
  };

  const eventsFiltres = events
    .filter((e) =>
      filtreSport
        ? e.sport.name.toLocaleLowerCase() === filtreSport.toLocaleLowerCase()
        : true,
    )
    .filter((e) =>
      filtreVille
        ? e.location
            .toLocaleLowerCase()
            .includes(filtreVille.toLocaleLowerCase())
        : true,
    )
    .filter((e) =>
      filtreDate
        ? String(e.date).toLocaleLowerCase() === filtreDate.toLocaleLowerCase()
        : true,
    );

  return (
    <main className="content">
      <div className="layout">
        <Filters
          filtreDate={filtreDate}
          setFiltreDate={setFiltreDate}
          filtreSport={filtreSport}
          setFiltreSport={setFiltreSport}
          filtreVille={filtreVille}
          setFiltreVille={setFiltreVille}
          reinitialiserFiltres={reinitialiserFiltres}
        />

        <div className="right-content">
          <section>
            <div className="events-grid">
              {eventsFiltres.map((event) => (
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

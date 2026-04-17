import EventsCard from "../../components/EventsCard/EventsCard";
import Filters from "../../components/Filters/Filters";
import "./Explorer.css";

const fakeMatch = {
  id: 1,
  title: "Match de foot",
  location: "Paris",
  date: "2026-05-01",
  distance: "0.5 km",
  time: "18:00 - 19:30",
  level: "Intermédiaire",
  price: 5,
  image: "",
};

function Explorer() {
  return (
    <main className="content">
      <div className="layout">
        <Filters />

        <div className="right-content">
          <div className="upcoming-list">
            <h2>Évènements à venir</h2>
            <div className="horizontal-card">
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
            </div>
          </div>

          <section>
            <h2>Tous les évènements</h2>

            <div className="events-grid">
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
              <EventsCard event={fakeMatch} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Explorer;

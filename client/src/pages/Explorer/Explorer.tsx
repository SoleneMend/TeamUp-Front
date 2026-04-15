import EventsCard from "../../components/EventsCard";
import Filters from "../../components/Filters";
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
            <h2>Événements à venir</h2>
            <div className="horizontal-card">
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
            </div>
          </div>

          <section>
            <h2>Tous les événments</h2>

            <div className="events-grid">
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
              <EventsCard match={fakeMatch} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Explorer;

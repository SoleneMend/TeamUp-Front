import { useState } from "react";
import CardSports from "../../components/CardSports/CardSports";
import EventsCard from "../../components/EventsCard/EventsCard";
import Hero from "../../components/Hero/Hero";
import Events from "../Events/Events";
import useEvents from "../../services/useEvents";
import useSports from "../../services/useSports";

import "./Home.css";

function Home() {
  const sports = useSports();
  const events = useEvents();
  const [modalOpen, setModalOpen] = useState(false);

  const homeEventIds = [1, 2, 28, 46];
  return (
    <div className="home-wrap">
      {modalOpen && <Events onClose={() => setModalOpen(false)} />}
      <section className="home-hero_container">
        <Hero onOpenModal={() => setModalOpen(true)} />
      </section>
      <section className="home-cardSports-container">
        <h2 className="home-cardSports-title">Vos top sports</h2>
        <div className="container-card-sports">
          {sports
            .filter((sport) => [1, 49, 15, 17, 47, 28].includes(sport.id))
            .map((sports) => (
              <CardSports key={sports.id} sports={sports} />
            ))}
        </div>
      </section>
      <section className="home-suggestEvent-container">
        <h2 className="home-suggestEvent-title">Suggestions d'évènements</h2>
        <div className="container-event-grid-home">
          {events
            .filter((event) => homeEventIds.includes(event.id))
            .map((event) => (
              <EventsCard key={event.id} event={event} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

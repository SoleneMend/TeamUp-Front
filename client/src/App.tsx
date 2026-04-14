import { Link } from "react-router";
import "./App.css";
import EventsCard from "./components/EventsCard";
import "./components/EventsCard.css";

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

function App() {
  return (
    <>
      <header>
        <h1 className="logo">TeamUp</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">testProfilUser</Link>
          </li>
        </ul>
      </nav>

      <main className="content">
        <hgroup className="block-primary">
          <h2 className="block-primary-main">TeamUp</h2>
          <p className="block-primary-sub">Project 2</p>
        </hgroup>

        <div className="upcoming-list">
          <h2>Eventments a venir</h2>
          <div className="horizontal-card">
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
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          La TeamB des WildWalkers
        </a>
      </footer>
    </>
  );
}

export default App;

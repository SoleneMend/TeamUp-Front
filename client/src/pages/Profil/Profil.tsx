import { Calendar } from "lucide-react";
import { Link } from "react-router";
import CardProfil from "../../components/CardProfil/CardProfil";
import Performances from "../../components/Performances/Performances";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import Skills from "../../components/Skills/Skills";
import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";
import useEvents from "../../services/useEvents";
import useUsers from "../../services/useUsers";

import "./Profil.css";
import "../../components/UpComingEvent/UpComingEvent.css";

const Profil = () => {
  const events = useEvents();
  const users = useUsers();
  const user = users[0];

  if (!user) return <p>Chargement...</p>;

  return (
    <div className="profil">
      <CardProfil
        name={user.name}
        bio={user.bio}
        url_image={user.url_image}
        location={user.location}
      />
      <div className="profil__content">
        <Skills sport={user.sports} />
        <Performances matches={142} victories={105} mvpCount={28} streak={5} />
      </div>
      <section className="Up-coming-section">
        <div className="Up-coming-title-details">
          <div className="Up-coming-title">
            <p>
              <Calendar />
            </p>
            <h2>Évènements à venir</h2>
          </div>
          <Link to="/explorer" className="Up-coming-details">
            VOIR TOUT
          </Link>
        </div>
        <div className="Up-coming-grid">
          {events.slice(0, 4).map((event) => (
            <UpComingEvent key={event.id} avenir={event} />
          ))}
        </div>
      </section>
      <section className="achievements-grid"></section>
      <section className="recent-activity-grid">
        <RecentActivity events={events.slice(8, 11)} />
      </section>
    </div>
  );
};

export default Profil;

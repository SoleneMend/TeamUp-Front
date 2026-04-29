import { Calendar } from "lucide-react";
import { Link } from "react-router";
import Achievements from "../../components/Achievements/Achievements";
import CardProfil from "../../components/CardProfil/CardProfil";
import Performances from "../../components/Performances/Performances";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import Skills from "../../components/Skills/Skills";
import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";
import useEvents from "../../services/useEvents";
import useUsers from "../../services/useUsers";

import "./Profil.css";
import "../../components/UpComingEvent/UpComingEvent.css";
import { useState } from "react";

const Profil = () => {
  // Boutton initialisé à la valeur false = mode normal
  const [isPro, setIsPro] = useState(false);
  const events = useEvents();
  const users = useUsers();
  const user = users[1];

  if (!user) return <p>Chargement...</p>;

  // Pour les Activités récentes
  const activityIds = [2, 10, 11];
  // Pour les évènements à venir
  const upcomingIds = [2, 6, 10, 12];

  return (
    // Condition pour le CSS, si isPro est True alors le className est profil--pro sinon profil
    <div className={`profil ${isPro ? "profil--pro" : ""}`}>
      <button
        type="button"
        className="btn-switch-profil"
        // Au click le profil devient l'inverse de ce qu'il est actuellement
        onClick={() => setIsPro(!isPro)}
      >
        {isPro ? "Revenir au mode normal" : "Passer en mode Pro"}
      </button>
      <CardProfil
        name={user.name}
        bio={user.bio}
        url_image={user.url_image}
        location={user.location}
      />
      <div className="profil__content">
        <Skills sport={user.sports} />
        {/* Veut juste dire : si c'est le mode pro alors affiche Performances */}
        {isPro && (
          <Performances
            matches={142}
            victories={105}
            mvpCount={28}
            streak={5}
          />
        )}{" "}
      </div>
      <section className="Up-coming-section">
        <div className="Up-coming-title-details">
          <div className="Up-coming-title">
            <p>
              <Calendar />
            </p>
            <h2 className="text-switcher">Évènements à venir</h2>
          </div>
          <Link to="/sessions" className="Up-coming-details">
            VOIR TOUT
          </Link>
        </div>
        <div className="Up-coming-grid">
          {events
            .filter((event) => upcomingIds.includes(event.id))
            .map((event) => (
              <UpComingEvent key={event.id} avenir={event} />
            ))}
        </div>
      </section>
      {/* Veut juste dire : si c'est le mode pro alors affiche Achievements */}

      {isPro && (
        <section className="achievements-grid">
          <Achievements />
        </section>
      )}
      <section className="recent-activity-grid">
        <RecentActivity
          events={events.filter((event) => activityIds.includes(event.id))}
        />
      </section>
    </div>
  );
};

export default Profil;

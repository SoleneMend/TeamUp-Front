import { Calendar } from "lucide-react";
import { Link } from "react-router";
import CardProfil from "../../components/CardProfil/CardProfil";
import Performances from "../../components/Performances/Performances";
import Skills from "../../components/Skills/Skills";

import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";
import useEvents from "../../services/useEvents";

import "./Profil.css";
import "../../components/UpComingEvent/UpComingEvent.css";

const Profil = () => {
  const events = useEvents();
  return (
    <div className="profil-wrap">
      <div className="profil">
        <CardProfil name="Marcus Thompson" location="Seattle, WA" />
        <div className="profil__content">
          <Skills
            sport={[
              { id: 1, name: "Soccer", niveau: "advanced", duration: 5 },
              { id: 2, name: "Tennis", niveau: "intermediate", duration: 3 },
              { id: 3, name: "Basketball", niveau: "beginner", duration: 1 },
            ]}
          />
          <Performances
            matches={142}
            victories={105}
            mvpCount={28}
            streak={5}
          />
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
        </div>
      </div>
    </div>
  );
};

export default Profil;

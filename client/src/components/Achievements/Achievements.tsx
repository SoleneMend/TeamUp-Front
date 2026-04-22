import { Crown, Handshake, Medal, Plus, ShieldBan, Timer } from "lucide-react";

import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievements-title">
        <div className="achievements-title-details">
          <div className="achievements-title">
            <p>
              <Medal />
            </p>
            <h2>Réalisations</h2>
          </div>
        </div>
      </div>
      <div className="achievements-badge">
        <div className="achievements-top">
          <div className="achievements-badge-orange">
            <div>
              <Crown />
            </div>
            <p>top scorer</p>
          </div>
          <div className="achievements-badge-darker">
            <div>
              <Handshake />
            </div>
            <p>fair play</p>
          </div>
          <div className="achievements-badge-orange">
            <div>
              <Timer />
            </div>
            <p>iron man</p>
          </div>
        </div>
        <div className="achievements-bottom">
          <div className="achievements-badge-lock">
            <div>
              <ShieldBan />
            </div>
            <p>centurion</p>
          </div>
          <div className="achievements-badge-lock">
            <div>
              <ShieldBan />
            </div>
            <p>traveler</p>
          </div>
          <div className="achievements-badge-undefined">
            <div>
              <Plus />
            </div>
            <p>more</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

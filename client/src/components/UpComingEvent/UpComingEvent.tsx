import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router";

import "./UpComingEvent.css";

function UpComingEvent() {
  return (
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
      <div className="Up-comming-Event">
        <div className="Up-coming-date">
          <p className="Up-coming-month">AVR</p>
          <p className="Up-coming-number">30</p>
        </div>
        <div className="Up-coming-lieux">
          <h3>Soccer LeagueSoccer LeagueSoccer League</h3>
          <p>Arena Decathlon</p>
        </div>
        <div className="Up-coming-avatar">
          <div className="avatar-stack">
            <img src="#" className="avatar" alt="" />
            <img src="#" className="avatar" alt="" />
            <div className="avatar avatar-count">+3</div>
          </div>
          <Link to="/explorer">
            <ChevronRight />
          </Link>
        </div>
      </div>
      <br />
      <div className="Up-comming-Event">
        <div className="Up-coming-date">
          <p className="Up-coming-month">JUN</p>
          <p className="Up-coming-number">04</p>
        </div>
        <div className="Up-coming-lieux">
          <h3>Soccer LeagueSoccer LeagueSoccer League</h3>
          <p>Arena Decathlon</p>
        </div>
        <div className="Up-coming-avatar">
          <div className="avatar-stack">
            <img src="#" className="avatar" alt="" />
            <img src="#" className="avatar" alt="" />
            <div className="avatar avatar-count">+3</div>
          </div>
          <Link to="/explorer">
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UpComingEvent;

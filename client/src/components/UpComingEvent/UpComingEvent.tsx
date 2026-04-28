import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { Event } from "../../services/useEvents";

import "./UpComingEvent.css";

type UpComingEventProps = {
  avenir: Event;
};

function UpComingEvent({ avenir }: UpComingEventProps) {
  const dateObj = new Date(avenir.date);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = dateObj
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase();
  const users = avenir.people_joining ?? [];
  const smallyAvatar = users.slice(0, 2);
  const remainingCount = Math.max(users.length - 2, 0);

  return (
    <section>
      <div className="Up-comming-Event">
        <div className="Up-coming-date">
          <p className="Up-coming-month">{month}</p>
          <p className="Up-coming-number">{day}</p>
        </div>
        <div className="Up-coming-lieux">
          <h3 className="text-switcher">{avenir.name}</h3>
          <p className="text-switcher">{avenir.localisation}</p>
        </div>
        <div className="Up-coming-avatar">
          <div className="avatar-stack">
            {smallyAvatar.map((user) => (
              <img
                key={user}
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user}`}
                className="avatar"
                alt={user}
              />
            ))}
            {remainingCount > 0 && (
              <div className="avatar avatar-count">+{remainingCount}</div>
            )}
          </div>
          <Link to="/sessions">
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UpComingEvent;

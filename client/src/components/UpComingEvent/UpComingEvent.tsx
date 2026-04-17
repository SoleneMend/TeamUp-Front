import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

import "./UpComingEvent.css";

type UpEvent = {
  id: number;
  name: string;
  location: string;
  date: string;
  user_joining: string[];
};

type UpComingEventProps = {
  avenir: UpEvent;
};

function UpComingEvent({ avenir }: UpComingEventProps) {
  const dateObj = new Date(avenir.date);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = dateObj
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase();
  const users = avenir.user_joining ?? [];
  const visibleUsers = users.slice(0, 2);
  const remainingCount = Math.max(users.length - 2, 0);

  return (
    <section>
      <div className="Up-comming-Event">
        <div className="Up-coming-date">
          <p className="Up-coming-month">{month}</p>
          <p className="Up-coming-number">{day}</p>
        </div>
        <div className="Up-coming-lieux">
          <h3>{avenir.name}</h3>
          <p>{avenir.location}</p>
        </div>
        <div className="Up-coming-avatar">
          <div className="avatar-stack">
            {visibleUsers.map((user) => (
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
          <Link to="/explorer">
            <ChevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UpComingEvent;

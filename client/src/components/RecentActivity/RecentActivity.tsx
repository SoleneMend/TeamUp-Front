import { ClipboardClock, History } from "lucide-react";
import type { Event } from "../../services/useEvents";
import "./RecentActivity.css";

type RecentActivityProps = {
  events: Event[];
};

function formatDateRelative(dateString: string): string {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  const diffMs = today.getTime() - eventDate.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Aujourd'hui";
  if (diffDays === 1) return "Hier";
  if (diffDays > 1) return `Il y a ${diffDays} jours`;
  return "À venir";
}

const fakeScores = ["4-2", "1-3", "2-1"];

function getResult(score: string): string {
  const [left, right] = score.split("-").map(Number);
  return left > right ? "WIN" : "LOSE";
}

const fakeDates = ["2026-04-10", "2026-04-15", "2026-04-18"];
const fakeStars = ["★★★★★", "★★★☆☆", "★★★★★"];

function RecentActivity({ events }: RecentActivityProps) {
  return (
    <section className="activity-section">
      <div className="activity-title-details">
        <div className="activity-title">
          <p>
            <ClipboardClock />
          </p>
          <h2 className="text-switcher">Activités récentes</h2>
        </div>
      </div>
      <div className="activity-title-tab">
        <div>
          <h4 className="activity-start">Mes sessions</h4>
        </div>
        <div className="activity-middle-title">
          <h4>Dates</h4>
          <h4>Résultats</h4>
          <h4>Scores</h4>
        </div>
        <div>
          <h4>Notes</h4>
        </div>
      </div>

      {events.map((event, index) => {
        const result = getResult(fakeScores[index]);

        return (
          <div key={event.id} className="activity-data-tab">
            <div className="activity-start-data">
              <div className="activity-logo-event">
                <History />
              </div>
              <div className="activity-start-data-adress">
                <span className="activity-event-name">{event.name}</span>
                <p>{event.localisation}</p>
              </div>
            </div>
            <div className="activity-middle-data">
              <span className="activity-date">
                {formatDateRelative(fakeDates[index])}
              </span>
              <span className={result === "WIN" ? "result-win" : "result-lose"}>
                {result}
              </span>
              <span className="activity-score">{fakeScores[index]}</span>
            </div>
            <div>
              <span className="activity-stars">{fakeStars[index]}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default RecentActivity;

import { TrendingUp } from "lucide-react";

import "./Performances.css";

interface PerformancesProps {
  matches: number;
  victories: number;
  mvpCount: number;
  streak: number;
}

const Performances = ({
  matches,
  victories,
  mvpCount,
  streak,
}: PerformancesProps) => {
  const winRate = matches > 0 ? Math.round((victories / matches) * 100) : 0;

  return (
    <div className="performances">
      <div className="performances-title-details">
        <div className="performances-title">
          <p>
            <TrendingUp />
          </p>
          <h2 className="text-switcher">Performance Analytics</h2>
        </div>
      </div>

      <div className="performances__grid">
        <div className="performances__card">
          <p className="performances__card-label">Taux de victoires</p>
          <p className="performances__card-value">{winRate}%</p>
          <p className="performances__card-sub performances__card-sub--positive">
            +3% ce mois
          </p>
        </div>

        <div className="performances__card">
          <p className="performances__card-label">Matches</p>
          <p className="performances__card-value">{matches}</p>
          <p className="performances__card-sub">Total joués</p>
        </div>

        <div className="performances__card">
          <p className="performances__card-label">Nombre de MVP</p>
          <p className="performances__card-value">{mvpCount}</p>
          <p className="performances__card-sub performances__card-sub--positive">
            Rang Elite
          </p>
        </div>

        <div className="performances__card">
          <p className="performances__card-label">Série</p>
          <p className="performances__card-value performances__card-value--streak">
            {streak}
          </p>
          <p className="performances__card-sub">Victoires d'affilée</p>
        </div>
      </div>
    </div>
  );
};

export default Performances;

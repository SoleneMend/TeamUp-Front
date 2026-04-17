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
      <h1 className="performances__title">Performance Analytics</h1>

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

import "./RecentActivity.css";

function RecentActivity() {
  return (
    <section>
      <div className="activity-title-tab">
        <h4>Activités récentes</h4>
      </div>
      <div className="activity-descriptions-event">
        <div className="activity-left-part">
          <h4>Mes sessions</h4>
          <div className="activity-name-details-logo">
            <p>LOGO</p>
            <div className="activity-name-details">
              <h3 className="activity-name">Nom event</h3>
              <p className="activity-details">Lieu event</p>
            </div>
          </div>
        </div>
        <div className="activity-middle-part">
          <div className="activity-part-A">
            <h4>Date</h4>
            <p>JOUR</p>
          </div>
          <div className="activity-part-B">
            <h4>Résultat</h4>
            <p>WIN</p>
          </div>
          <div className="activity-part-C">
            <h4>Score</h4>
            <p>4-2</p>
          </div>
        </div>
        <div className="activity-right-part">
          <h4>Notes</h4>
          <p>*****</p>
        </div>
      </div>
    </section>
  );
}

export default RecentActivity;

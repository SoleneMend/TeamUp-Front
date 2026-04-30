import "./Filters.css";
import ButtonFilters from "./ButtonFilters";

type FiltersProps = {
  filtreSport: string;
  setFiltreSport: React.Dispatch<React.SetStateAction<string>>;
  showAllSport: boolean;
  setShowAllSport: React.Dispatch<React.SetStateAction<boolean>>;
  filtreVille: string;
  setFiltreVille: React.Dispatch<React.SetStateAction<string>>;
  filtreDate: string;
  setFiltreDate: React.Dispatch<React.SetStateAction<string>>;
  reinitialiserFiltres: () => void;
};
function Filters({
  reinitialiserFiltres,
  filtreDate,
  showAllSport,
  setFiltreDate,
  setFiltreSport,
  setShowAllSport,
  filtreVille,
  setFiltreVille,
}: FiltersProps) {
  return (
    <aside className="filters">
      <section>
        <div className="filters-header">
          <h3>Filters</h3>
          <button
            onClick={reinitialiserFiltres}
            type="button"
            className="clear-btn"
          >
            Effacer
          </button>
        </div>

        <div className="filter-group">
          <p>Sport</p>
          <div className="buttons">
            <ButtonFilters
              showAllSport={showAllSport}
              setShowAllSport={setShowAllSport}
              setFiltreSport={setFiltreSport}
            />
          </div>
        </div>
        <div className="filter-group">
          <p>Localisation</p>
          <input
            value={filtreVille}
            onChange={(e) => setFiltreVille(e.target.value)}
            className="filter-search"
            type="search"
            placeholder="Ecrivez votre ville..."
          />
        </div>

        <div className="filter-group">
          <p>Niveau</p>
          <label>
            <input className="filter-input" type="checkbox" /> Pro
          </label>
          <label>
            <input className="filter-input" type="checkbox" defaultChecked />
            Avancé
          </label>
          <label>
            <input className="filter-input" type="checkbox" /> Intermediaire
          </label>
          <label>
            <input className="filter-input" type="checkbox" /> Débutant
          </label>
        </div>

        <div className="filter-group">
          <p>Date </p>
          <input
            value={filtreDate}
            onChange={(e) => setFiltreDate(e.target.value)}
            className="filter-input"
            type="date"
          />
        </div>
      </section>
    </aside>
  );
}

export default Filters;

{
  /* <-- pour solene --> */
}
{
  /* <input className="filter-input" type="range" min="1" max="20" /> */
}

{
  /* <button type="button" className="apply-btn">
  Appliquer{" "}
</button> */
}

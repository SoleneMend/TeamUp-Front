// import { useState } from "react";
// import useEvents from "../../services/useEvents"

type FiltersProps = {
  filtreSport: string;
  setFiltreSport: React.Dispatch<React.SetStateAction<string>>;
  filtreVille: string;
  setFiltreVille: React.Dispatch<React.SetStateAction<string>>;
  filtreDate: string;
  setFiltreDate: React.Dispatch<React.SetStateAction<string>>;
  reinitialiserFiltres: () => void;
};
function Filters({
  reinitialiserFiltres,
  filtreDate,
  setFiltreDate,
  setFiltreSport,
  filtreVille,
  setFiltreVille,
}: FiltersProps) {
  return (
    <aside className="filters">
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
          <button type="button" onClick={() => setFiltreSport("football")}>
            ⚽ Football
          </button>
          <button type="button" onClick={() => setFiltreSport("tennis")}>
            🎾 Tennis
          </button>

          <button onClick={() => setFiltreSport("basketball")} type="button">
            🏀 Basket
          </button>
          <button onClick={() => setFiltreSport("volleyball")} type="button">
            🏐 Volley
          </button>
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
        {/* <input className="filter-input" type="range" min="1" max="20" /> */}
      </div>

      <div className="filter-group">
        <p>Niveau</p>
        <label>
          <input className="filter-input" type="checkbox" /> Pro{" "}
        </label>
        <label>
          <input className="filter-input" type="checkbox" defaultChecked />{" "}
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
        <p>Date preferée</p>
        <input
          value={filtreDate}
          onChange={(e) => setFiltreDate(e.target.value)}
          className="filter-input"
          type="date"
        />
      </div>

      <button type="button" className="apply-btn">
        Appliquer{" "}
      </button>
    </aside>
  );
}

export default Filters;

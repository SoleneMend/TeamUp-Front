// import { useState } from "react";
// import useEvents from "../../services/useEvents"

type FiltersProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};
function Filters({ city, setCity }: FiltersProps) {
  return (
    <aside className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button type="button" className="clear-btn">
          Effacer
        </button>
      </div>

      <div className="filter-group">
        <p>Sport</p>
        <div className="buttons">
          <button type="button" className="active">
            ⚽ Football
          </button>
          <button type="button">🎾 Tennis</button>
          <button type="button">🏀 Basket</button>
          <button type="button">🏐 Volley</button>
        </div>
      </div>
      <div className="filter-group">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
        <input className="filter-input" type="date" />
      </div>

      <button type="button" className="apply-btn">
        Appliquer{" "}
      </button>
    </aside>
  );
}

export default Filters;

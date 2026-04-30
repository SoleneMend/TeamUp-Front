import { useState } from "react";

import useEvents from "../../services/useEvents";

type ButtonFiltersProps = {
  setFiltreSport: React.Dispatch<React.SetStateAction<string>>;
  setShowAllSport: React.Dispatch<React.SetStateAction<boolean>>;
  showAllSport: boolean;
};

function ButtonFilters({ setFiltreSport, showAllSport }: ButtonFiltersProps) {
  const sportEvent = useEvents();
  const [showAllSports, setShowAllSports] = useState(showAllSport);
  // Dédoublonner par nom de sport
  const noRepeat = sportEvent.reduce((acc, event) => {
    const sportName = event.sport.name;
    if (sportName && !acc.has(sportName)) {
      acc.set(sportName, event);
    }
    return acc;
  }, new Map());

  const result = Array.from(noRepeat.values());

  return (
    <>
      {result
        .map((e) => (
          <button
            key={e.id}
            type="button"
            onClick={() => setFiltreSport(e.sport.name ?? "")}
          >
            {e.sport.name}
          </button>
        ))
        .slice(0, showAllSports ? result.length : 4)}

      {showAllSports ? (
        <button type="button" onClick={() => setShowAllSports(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>button minus</title>
            <path d="M5 12h14" />
          </svg>
        </button>
      ) : (
        <button type="button" onClick={() => setShowAllSports(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>button more</title>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ButtonFilters;

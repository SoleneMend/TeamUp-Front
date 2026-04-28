import useEvents from "../../services/useEvents";

type ButtonFiltersProps = {
  setFiltreSport: React.Dispatch<React.SetStateAction<string>>;
};

function ButtonFilters({ setFiltreSport }: ButtonFiltersProps) {
  const sportEvent = useEvents();

  // Dédoublonner par nom de sport
  const noRepeat = sportEvent.reduce((acc, event) => {
    const sportName = event.sports.name;
    if (sportName && !acc.has(sportName)) {
      acc.set(sportName, event);
    }
    return acc;
  }, new Map());

  const result = Array.from(noRepeat.values());

  return (
    <>
      {result.map((e) => (
        <button
          key={e.id}
          type="button"
          onClick={() => setFiltreSport(e.sports.name ?? "")}
        >
          {e.sports.name}
        </button>
      ))}
    </>
  );
}

export default ButtonFilters;

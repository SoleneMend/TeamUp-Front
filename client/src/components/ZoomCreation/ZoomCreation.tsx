import { useEffect, useState } from "react";
import "./ZoomCreation.css";

interface SportsType {
  sport_id: number;
  sport_name: string;
}

interface LevelsType {
  level_id: number;
  level_name: string;
}

function ZoomCreation() {
  const [hostID, setHostID] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [sportID, setSportID] = useState("");
  const [isComp, setIsComp] = useState(false);
  const [level, setLevel] = useState("");
  const [maxPeople, setMaxPeople] = useState<number | null>(null);

  const [listSport, setListSport] = useState<SportsType[]>([]);
  const [listLevel, setListLevel] = useState<LevelsType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/bdd/sports")
      .then((res) => res.json())
      .then((data: SportsType[]) => setListSport(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/bdd/levels")
      .then((res) => res.json())
      .then((data: LevelsType[]) => setListLevel(data));
  }, []);

  function dateFormatDB(value: string) {
    return `${value.replace("T", " ")}:00`;
  }

  function checkSportID(sport: string) {
    const value = Number(sport);

    return listSport.some((s) => s.sport_id === value);
  }

  function checkLevelID(level: string) {
    const value = Number(level);

    return listLevel.some((l) => l.level_id === value);
  }

  function AddEvent(e: React.FormEvent) {
    e.preventDefault();

    const validSport = checkSportID(sportID);

    if (!validSport) {
      alert("Invalid Sport ID");
      return;
    } else {
      console.log("Sport ok");
    }

    if (isComp) {
      if (Number.isNaN(Number(level))) {
        console.log("Invalid number for the rating");
        return;
      }
    } else {
      const validLevel = checkLevelID(level);

      if (!validLevel) {
        alert("Invalid Level ID");
        return;
      } else {
        console.log("Non comp Level ok");
      }
    }

    fetch("http://localhost:3310/bdd/add/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: hostID, //tempo
        name: name,
        date: dateFormatDB(date),
        description: description,
        location: location,
        sport: Number(sportID),
        comp: isComp ? 1 : 0,
        level: Number(level),
        max_people: Number(maxPeople),
      }),
    });
  }

  return (
    <form onSubmit={AddEvent}>
      {/* Host ID Tempo */}
      <input
        type="number"
        placeholder="Enter the id of the host"
        onChange={(e) => setHostID(Number(e.target.value))}
        required
      />

      {/* Name */}
      <input
        type="text"
        placeholder="Enter name for the event"
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Date */}
      <input
        type="datetime-local"
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Description */}
      <input
        type="text"
        placeholder="Enter the descritpion for the event"
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Enter location for the event"
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      {/* Sport*/}
      <select
        value={sportID}
        onChange={(e) => setSportID(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Choose --
        </option>
        {listSport.map((sport) => (
          <option key={sport.sport_id} value={sport.sport_id}>
            {sport.sport_name}
          </option>
        ))}
      </select>

      {/* Level -- need update*/}
      {isComp ? (
        <input
          type="number"
          placeholder="Enter the rating for the event"
          onChange={(e) => setLevel(e.target.value)}
          required
        />
      ) : (
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Choose --
          </option>
          {listLevel.map((level) => (
            <option key={level.level_id} value={level.level_id}>
              {level.level_name}
            </option>
          ))}
        </select>
      )}

      {/* is Comp*/}
      <input
        type="checkbox"
        checked={isComp}
        onChange={(e) => setIsComp(e.target.checked)}
      />

      {/* Max people */}
      <input
        type="number"
        placeholder="Enter username of user"
        onChange={(e) => setMaxPeople(Number(e.target.value))}
        required
      />

      <button type="submit">Add the event</button>
    </form>
  );
}

export default ZoomCreation;

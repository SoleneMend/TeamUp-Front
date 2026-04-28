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
    <div className="zoom-global">
      <h2 className="zoom-headtitle">
        Ton <span>événement</span>
      </h2>
      <form onSubmit={AddEvent} className="zoom-form">
        {/* Host ID Tempo */}
        <input
          type="number"
          className="zoom-form-host"
          placeholder="Entrer votre ID"
          onChange={(e) => setHostID(Number(e.target.value))}
          required
        />

        {/* Name */}
        <input
          type="text"
          className="zoom-form-name"
          placeholder="Le nom de ton événement"
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Date */}
        <input
          type="datetime-local"
          className="zoom-form-date"
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Description */}
        <input
          type="text"
          className="zoom-form-resume"
          placeholder="Descrivez votre événement"
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Location */}
        <input
          type="text"
          className="zoom-form-loc"
          placeholder="Lieux de l'événement"
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        {/* Max people */}
        <input
          type="number"
          className="zoom-form-guest"
          placeholder="Nombre de participant"
          onChange={(e) => setMaxPeople(Number(e.target.value))}
          required
        />

        {/* Sport*/}
        <select
          value={sportID}
          className="zoom-form-sport"
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
        <div className="zoom-form-level-row">
          {isComp ? (
            <input
              type="number"
              className="zoom-form-rank"
              placeholder="Sélectionne ton rang"
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
            className="zoom-form-checkbox"
            checked={isComp}
            onChange={(e) => setIsComp(e.target.checked)}
          />
        </div>

        <button type="submit" className="zoom-form-sub">
          Créer
        </button>
      </form>
    </div>
  );
}

export default ZoomCreation;

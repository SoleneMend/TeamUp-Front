import { useState } from "react";
import "./ZoomCreation.css";

function ZoomCreation() {
  const [userId, setUserId] = useState("");
  const [sportId, setSportId] = useState("");
  const [levelId, setLevelId] = useState("");
  const [frequencyNum, setFrequencyNum] = useState("");

  function AddNewSport() {
    fetch("http://localhost:3310/bdd/2/addsport", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        sport_id: sportId,
        level_id: levelId,
        frequency: frequencyNum,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form>
      <input
        type="number"
        placeholder="Enter id of user"
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter id of sport"
        onChange={(e) => setSportId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter id of level"
        onChange={(e) => setLevelId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter the frequency"
        onChange={(e) => setFrequencyNum(e.target.value)}
      />
      <button type="button" onClick={AddNewSport}>
        Ajoute un sport
      </button>
    </form>
  );
}

export default ZoomCreation;

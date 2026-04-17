import { useState } from "react";
import "./ZoomCreation.css";

function ZoomCreation() {
  const [userName, setUserName] = useState("");

  function ShowUser() {
    fetch(`http://localhost:3310/bdd/users?username=${userName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
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
        type="text"
        placeholder="Enter username of user"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="button" onClick={ShowUser}>
        Chech this users
      </button>
    </form>
  );
}

export default ZoomCreation;

import { useEffect, useState } from "react";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return events;
};

export default useEvents;

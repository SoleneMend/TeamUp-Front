import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  image_url: string;
}

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Test",
      image_url:
        "https://histoiredupsg.fr/wp-content/uploads/2017/07/Parc-2017.jpg",
      // lien à virer quand backend tournera on laissera le tableau vide pour aller chercher les infos nécessaires
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3310/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return events;
};

export default useEvents;

import { useEffect, useState } from "react";

export interface Event {
  id: number;
  name: string;
  host: string;
  is_comp: boolean;
  location: string;
  description: string;
  date: string;
  max_people: number;
  user_joining?: string[];
  sport: {
    name: string;
    level: string;
    image: string;
  };
  is_done: boolean;
  mvp: string;
  winners: string[];
}

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/bdd/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return events;
};

export default useEvents;

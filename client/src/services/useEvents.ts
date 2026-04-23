import { useEffect, useState } from "react";

export interface Event {
  id: number;
  name: string;
  localisation: string;
  host: string;
  description: string;
  date: number;
  heure: number;
  max_people: number;
  people_joining?: string[];
  sport?: {
    name: string;
    niveau: string;
  };
  is_done: boolean;
  comments: [];
  img_url_event: string;
}

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return events;
};

export default useEvents;

import { useEffect, useState } from "react";

export interface Sports {
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

const useSports = () => {
  const [spt, setSpt] = useState<Sports[]>([]);

  useEffect(() => {
    // vers events car sports n'a pas d'ID dans l'api...
    fetch("http://localhost:3310/bdd/events")
      .then((res) => res.json())
      .then((data) => setSpt(data));
  }, []);

  return spt;
};

export default useSports;

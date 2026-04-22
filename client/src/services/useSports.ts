import { useEffect, useState } from "react";

export interface Sports {
  id: number;
  name: string;
  localisation: string;
  host: string;
  description: string;
  date: number;
  heure: number;
  max_people: number;
  people_joining?: [];
  sport?: {
    name: string;
    niveau: string;
  };
  is_done: boolean;
  comments: [];
  img_url_event: string;
}

const useSports = () => {
  const [sports, setSports] = useState<Sports[]>([]);

  useEffect(() => {
    // vers events car sports n'a pas d'ID dans l'api...
    fetch("http://localhost:3310/events")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  return sports;
};

export default useSports;

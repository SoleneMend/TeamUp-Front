import { useEffect, useState } from "react";

export interface Sport {
  name: string;
  level: string;
  level_comp: number;
  frequency: number;
  match_played: number;
  match_won: number;
  winstreak: number;
  mvp_count: number;
}

export interface Users {
  id: number;
  username: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  url_image: string;
  sports: Sport[];
  stats: {
    match_played: number;
    match_won: number;
    winstreak: number;
    mvp_count: number;
  };
}

const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/bdd/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
};

export default useUsers;

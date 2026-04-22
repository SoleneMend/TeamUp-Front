import { useEffect, useState } from "react";

export interface Users {
  id: number;
  username: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  url_image: string;
  sports: {
    name: string;
    level: string;
    level_comp: number;
    frenquecy: number;
    match_played: number;
    match_won: number;
    winstreal: number;
    mvp_count: number;
  }[];
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
    fetch("http://localhost:3310/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
};

export default useUsers;

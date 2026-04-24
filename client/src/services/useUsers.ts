import { useEffect, useState } from "react";

export interface Users {
  id: number;
  username: string;
  name: string;
  age: number;
  sport: {
    name: string;
    niveau: string;
    duration: number;
  }[];
  bio: string;
  url_image: string;
  location: string;
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

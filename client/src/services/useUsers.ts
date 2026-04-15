import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // <- le [] est important !

  return users;
};

export default useUsers;

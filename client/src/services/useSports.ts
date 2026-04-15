import { useEffect, useState } from "react";

const useSports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/sports")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  return sports;
};

export default useSports;

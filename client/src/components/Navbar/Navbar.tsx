import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

interface userProps {
  id: number;
  username: string;
  name: string;
  age: number;
  sport: string[];
  url_image: string;
  location: string;
}

function Navbar(): React.JSX.Element {
  const [user, setUser] = useState<userProps | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/users")
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
  }, []);

  return (
    <section className="Navbar-section">
      <h1 className="Navbar-logo">
        Team<span className="Navbar-logo-up">Up</span>
      </h1>
      <div className="Navbar-div-notif-profil">
        <div className="Navbar-div-notif">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="lucide lucide-bell-icon lucide-bell"
          >
            <title>notif</title>
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </div>
        <Link to="/profil">
          <div className="Navbar-div-profil">
            <img
              src={user?.url_image}
              alt={user?.username}
              className="Navbar-div-profil-img"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;

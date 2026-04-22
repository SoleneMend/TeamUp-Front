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
          <label className="toggle">
            <input type="checkbox" id="btnToggle" name="btnToggle" />
            <span className="slider"></span>
          </label>
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

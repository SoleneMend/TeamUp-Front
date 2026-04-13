import { Link } from "react-router";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">TeamUp</h1>
      <nav className="sidebar-nav">
        <Link to="/">Accueil</Link>
        <Link to="/explorer">Explorer</Link>
        <Link to="/mes-sessions">Mes sessions</Link>
        <Link to="/messagerie">Messagerie</Link>
      </nav>
    </aside>
  );
}

export default SideBar;

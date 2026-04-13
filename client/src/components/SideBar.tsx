import { CalendarDays, House, MessageSquareText, Search } from "lucide-react";
import { NavLink } from "react-router";

import "./SideBar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">
        Team<span className="sidebar-logo-up">Up</span>
      </h1>
      <nav className="sidebar-nav">
        <NavLink to="/">
          <House size={16} />
          Accueil
        </NavLink>
        <NavLink to="/explorer">
          <Search size={16} />
          Explorer
        </NavLink>
        <NavLink to="/mes-sessions">
          <CalendarDays size={16} />
          Mes sessions
        </NavLink>
        <NavLink to="/messagerie">
          <MessageSquareText size={16} />
          Messagerie
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideBar;

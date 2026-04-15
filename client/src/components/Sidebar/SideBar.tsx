import { CalendarDays, House, MessageSquareText, Search } from "lucide-react";
import { NavLink } from "react-router";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-logo">
        Team<span className="sidebar-logo-up">Up</span>
      </h1>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/">
              <House size={16} aria-hidden="true" />
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorer">
              <Search size={16} aria-hidden="true" />
              Explorer
            </NavLink>
          </li>
          <li>
            <NavLink to="/sessions">
              <CalendarDays size={16} aria-hidden="true" />
              Mes sessions
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat">
              <MessageSquareText size={16} aria-hidden="true" />
              Messagerie
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;

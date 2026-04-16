import { Outlet } from "react-router";

import "./App.css";
// import EventsCard from "./components/EventsCard";
import "./components/EventsCard/EventsCard";
import "./components/EventsCard/EventsCard.css";
import "./components/Filters/Filters";
import "./components/Filters/Filters.css";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar-container">
        <SideBar />
      </aside>
      <header className="header-container">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer className="footer-container"></footer>
    </div>
  );
}

export default App;

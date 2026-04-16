import { Outlet } from "react-router";

import "./App.css";
import Footer from "./components/Footer/Footer";
// import EventsCard from "./components/EventsCard";
import "./components/EventsCard.css";
import "./components/Filters";
import "./components/Filters.css";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <div className="app-layout">
      <header className="header-container">
        <nav>
          <Navbar />
        </nav>
      </header>
      <aside className="sidebar-container">
        <SideBar />
      </aside>
      <main className="main-container">
        <Outlet />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

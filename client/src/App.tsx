import { Outlet, ScrollRestoration } from "react-router";

import "./App.css";

import Footer from "./components/Footer/Footer";
import "./components/EventsCard/EventsCard";
import "./components/EventsCard/EventsCard.css";
import "./components/Filters/Filters";
import "./components/Filters/Filters.css";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import { ThemeContextProvider } from "./hook/useTheme";

function App() {
  return (
    <ThemeContextProvider>
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
          <ScrollRestoration />
          <Outlet />
        </main>
        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

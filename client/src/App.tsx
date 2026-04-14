import { Outlet } from "react-router";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <nav className="navbar">
        <Navbar />
      </nav>

      <main className="text-box">
        <Outlet />
        <hgroup className="block-primary">
          <h2 className="block-primary-main">TeamUp</h2>
          <p className="block-primary-sub">Project 2</p>
        </hgroup>
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          La TeamB des WildWalkers
        </a>
      </footer>
    </>
  );
}

export default App;

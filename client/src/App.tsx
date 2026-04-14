import { Outlet } from "react-router";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>
      <SideBar />

      <main className="text-box">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

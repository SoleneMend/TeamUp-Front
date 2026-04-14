import { Link, Outlet } from "react-router";
import "./App.css";
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>
      <header>
        <h1 className="logo">TeamUp</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">testProfilUser</Link>
          </li>
        </ul>
      </nav>

      <main className="text-box">
        <Outlet />
        <hgroup className="block-primary">
          <h2 className="block-primary-main">TeamUp</h2>
          <p className="block-primary-sub">Project 2</p>
        </hgroup>
      </main>

    <Skills sport={[
  { id: 1, name: "Football", niveau: "intermediate", duration: 3 },
  { id: 2, name: "Tennis", niveau: "advanced", duration: 5 },
  { id: 3, name: "Basketball", niveau: "beginner", duration: 1 },
]} />


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

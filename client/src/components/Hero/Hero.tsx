import { NavLink } from "react-router";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="go-years">SAISON 2026</p>
      <br />
      <h2 className="hero-title">Prêt·e à tout donner ? 💥</h2>
      <p className="hero-descr">
        Seul·e ou en groupe ? Trouve des buddies et partage <br />
        des sessions sportives motivantes.{" "}
      </p>
      <ul className="hero-link">
        <li className="hero-button-one">
          <NavLink to="/explorer">Explorer</NavLink>
        </li>
        <li className="hero-button-two">
          <NavLink to="/explorer">à modifier</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Hero;

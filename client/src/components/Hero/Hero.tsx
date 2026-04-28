import { NavLink } from "react-router";
// import HeroImgBg from "../../assets/images/HeroImgBg.svg";
import videoBanner from "../../assets/video/videoBanner.mp4";

import "./Hero.css";

interface HeroProps {
  onOpenModal: () => void;
}

function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={videoBanner} type="video/mp4" />
      </video>

      {/* <img src={HeroImgBg} alt="" className="hero-img" /> */}
      <p className="go-years">SAISON 2026</p>
      <br />
      <h2 className="hero-title">Prêt·e à tout donner?</h2>
      <p className="hero-descr">
        Seul·e ou en groupe? Trouve des buddies et partage <br />
        des sessions sportives motivantes.{" "}
      </p>
      <ul className="hero-link">
        <li className="hero-button-one">
          <NavLink to="/explorer">Explorer</NavLink>
        </li>
        <li className="hero-button-two">
          <button
            type="button"
            className="hero-modal-button"
            onClick={onOpenModal}
          >
            Créer une session
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Hero;

import { Link } from "react-router";
import imageinstagram from "../../assets/images/instagram.png";
import "./Footer.css";
import imagegithub from "../../assets/images/github.png";
import imagelinkedin from "../../assets/images/linkedin.png";
import imagetwitter from "../../assets/images/twitter.png";

function Footer() {
  return (
    <section className="Footer-section">
      <div className="container-text-links">
        <div className="Footer-div-links">
          <nav className="Footer-nav-links">
            <ul className="Footer-list-links">
              <li className="Footer-links">
                <Link to="/explorer">Explorer</Link>
              </li>
              <li className="Footer-links">
                <Link to="/sessions">Mes sessions</Link>
              </li>
              <li className="Footer-links">
                <Link to="/chat">Messagerie</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Footer-div-text">
          <h2 className="div-text-title">
            <span>Team</span>Up
          </h2>
          <p className="div-text-desc1">
            La <span>communauté</span> sportive qui vous ressemble
          </p>
          <p className="div-text-desc2">
            Trouve ton<span> partenaire de jeu</span>,<br /> pas juste un
            adversaire.
          </p>
          <p className="div-text-desc3">
            TeamUp met en <span>relation</span> des sportifs passionnés qui
            cherchent à jouer <span>ensemble</span> — que tu veuilles un
            partenaire de tennis, une équipe de foot, ou un groupe de trail du
            dimanche.
          </p>
          <div className="div-logo">
            <Link to="https://www.instagram.com/">
              <img src={imageinstagram} alt="" className="logo-img1" />
            </Link>
            <Link to="https://github.com/ChickenCodeSchool/Js-Crew-vert-wildwalker-P2-G3">
              <img src={imagegithub} alt="" className="logo-img2" />
            </Link>
            <Link to="https://fr.linkedin.com/">
              <img src={imagelinkedin} alt="" className="logo-img1" />
            </Link>
            <Link to="https://x.com/?lang=fr">
              <img src={imagetwitter} alt="" className="logo-img2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

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
          <h2 className="div-text-title">TeamUp</h2>
          <p className="div-text-desc1">
            La communauté sportive qui vous ressemble
          </p>
          <p className="div-text-desc2">
            Trouve ton<span> partenaire de jeu</span>,<br /> pas juste un
            adversaire.
          </p>
          <p className="div-text-desc3">
            TeamUp met en relation des sportifs passionnés qui cherchent à jouer
            ensemble — que tu veuilles un partenaire de tennis, une équipe de
            foot, ou un groupe de trail du dimanche.
          </p>
          <div className="div-logo">
            <img src={imageinstagram} alt="" className="logo-img" />
            <img src={imagegithub} alt="" className="logo-img" />
            <img src={imagelinkedin} alt="" className="logo-img" />
            <img src={imagetwitter} alt="" className="logo-img" />
          </div>
        </div>
      </div>
      <div className="Footer-div-container-img">
        <h2 className="Footer-div-container-img-title">
          Ils nous font déjà confiance
        </h2>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>VELOMAX</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <circle
            cx="80"
            cy="50"
            r="30"
            fill="none"
            stroke="#E84B2A"
            stroke-width="4"
          />
          <circle cx="80" cy="50" r="6" fill="#E84B2A" />
          <line
            x1="80"
            y1="20"
            x2="80"
            y2="80"
            stroke="#E84B2A"
            stroke-width="2"
          />
          <line
            x1="50"
            y1="50"
            x2="110"
            y2="50"
            stroke="#E84B2A"
            stroke-width="2"
          />
          <line
            x1="59"
            y1="29"
            x2="101"
            y2="71"
            stroke="#E84B2A"
            stroke-width="2"
          />
          <line
            x1="101"
            y1="29"
            x2="59"
            y2="71"
            stroke="#E84B2A"
            stroke-width="2"
          />
          <text
            x="80"
            y="96"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#E84B2A"
            letter-spacing="2"
            font-family="sans-serif"
          >
            VELOMAX
          </text>
          <text
            x="80"
            y="108"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            cycling gear
          </text>
        </svg>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>IRONZONE</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <rect x="22" y="42" width="20" height="16" rx="3" fill="#1A1A2E" />
          <rect x="118" y="42" width="20" height="16" rx="3" fill="#1A1A2E" />
          <rect x="40" y="46" width="80" height="8" rx="2" fill="#1A1A2E" />
          <rect x="28" y="37" width="10" height="26" rx="2" fill="#3A3A6E" />
          <rect x="122" y="37" width="10" height="26" rx="2" fill="#3A3A6E" />
          <text
            x="80"
            y="88"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#1A1A2E"
            letter-spacing="2"
            font-family="sans-serif"
          >
            IRONZONE
          </text>
          <text
            x="80"
            y="100"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            strength &amp; performance
          </text>
        </svg>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>AquaRush</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <path
            d="M15 48 Q37 28 59 48 Q81 68 103 48 Q125 28 145 48"
            fill="none"
            stroke="#0077B6"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M15 62 Q37 42 59 62 Q81 82 103 62 Q125 42 145 62"
            fill="none"
            stroke="#0096C7"
            stroke-width="2.5"
            stroke-linecap="round"
            opacity="0.5"
          />
          <text
            x="80"
            y="90"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#0077B6"
            letter-spacing="2"
            font-family="sans-serif"
          >
            AQUARUSH
          </text>
          <text
            x="80"
            y="102"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            swimwear &amp; gear
          </text>
        </svg>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>PeakFit</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <polygon points="80,15 128,68 32,68" fill="#2D6A4F" />
          <polygon points="105,33 142,68 68,68" fill="#40916C" opacity="0.65" />
          <line
            x1="32"
            y1="68"
            x2="128"
            y2="68"
            stroke="#2D6A4F"
            stroke-width="2"
          />
          <text
            x="80"
            y="88"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#2D6A4F"
            letter-spacing="2"
            font-family="sans-serif"
          >
            PEAKFIT
          </text>
          <text
            x="80"
            y="100"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            outdoor sports
          </text>
        </svg>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>UrbanRun</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <path
            d="M18 60 Q48 25 103 44 L142 36 L134 52 Q94 36 54 66 Z"
            fill="#FF6B35"
          />
          <circle cx="142" cy="44" r="5" fill="#FF6B35" />
          <text
            x="80"
            y="90"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#FF6B35"
            letter-spacing="2"
            font-family="sans-serif"
          >
            URBANRUN
          </text>
          <text
            x="80"
            y="102"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            city running
          </text>
        </svg>
        <svg
          width="200"
          height="137"
          viewBox="0 0 160 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>ZenMove</title>
          <rect width="160" height="110" fill="white" rx="8" />
          <ellipse
            cx="80"
            cy="50"
            rx="18"
            ry="25"
            fill="#7B2D8B"
            opacity="0.9"
          />
          <ellipse
            cx="57"
            cy="55"
            rx="16"
            ry="20"
            fill="#9B3BAA"
            opacity="0.55"
            transform="rotate(-25,57,55)"
          />
          <ellipse
            cx="103"
            cy="55"
            rx="16"
            ry="20"
            fill="#9B3BAA"
            opacity="0.55"
            transform="rotate(25,103,55)"
          />
          <ellipse
            cx="40"
            cy="63"
            rx="12"
            ry="15"
            fill="#C06FD0"
            opacity="0.35"
            transform="rotate(-45,40,63)"
          />
          <ellipse
            cx="120"
            cy="63"
            rx="12"
            ry="15"
            fill="#C06FD0"
            opacity="0.35"
            transform="rotate(45,120,63)"
          />
          <text
            x="80"
            y="92"
            text-anchor="middle"
            font-size="13"
            font-weight="500"
            fill="#7B2D8B"
            letter-spacing="2"
            font-family="sans-serif"
          >
            ZENMOVE
          </text>
          <text
            x="80"
            y="104"
            text-anchor="middle"
            font-size="9"
            fill="#888"
            font-family="sans-serif"
          >
            yoga &amp; wellness
          </text>
        </svg>
      </div>
    </section>
  );
}

export default Footer;

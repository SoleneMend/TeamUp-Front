import "./Profil.css";

import CardProfil from "../../components/CardProfil/CardProfil";

// import Performances from "../../components/Performances/Performances";
// import Skills from "../../components/Skills/Skills";

const Profil = () => {
  return (
    <div className="profil">
      <CardProfil name="Marcus Thompson" location="Seattle, WA" />
    </div>
  );
};

export default Profil;

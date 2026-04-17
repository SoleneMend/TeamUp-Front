import CardProfil from "../../components/CardProfil/CardProfil";
import Performances from "../../components/Performances/Performances";
import Skills from "../../components/Skills/Skills";
import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";

const Profil = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "1.5rem",
      }}
    >
      <CardProfil name="Marcus Thompson" location="Seattle, WA" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "1.5rem",
        }}
      >
        <Skills
          sport={[
            { id: 1, name: "Soccer", niveau: "advanced", duration: 5 },
            { id: 2, name: "Tennis", niveau: "intermediate", duration: 3 },
            { id: 3, name: "Basketball", niveau: "beginner", duration: 1 },
          ]}
        />
        <Performances matches={142} victories={105} mvpCount={28} streak={5} />
        <UpComingEvent />
      </div>
    </div>
  );
};

export default Profil;

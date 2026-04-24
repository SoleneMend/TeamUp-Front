import CardSports from "../../components/CardSports/CardSports";
import Hero from "../../components/Hero/Hero";
import useSports from "../../services/useSports";
import "./Home.css";

function Home() {
  const sports = useSports();

  return (
    <div className="home-wrap">
      <section className="home-hero_container">
        <Hero />
      </section>
      <section className="home-cardSports-container">
        <h2 className="home-cardSports-title">Vos top sports</h2>
        <div className="container-card-sports">
          {sports
            // Ajout du filtre pour sélectionner les cards qu'on veut afficher
            .filter((sport) => [1, 2, 15, 17, 47, 28].includes(sport.id))
            .map((sports) => (
              <CardSports key={sports.id} sports={sports} />
            ))}
        </div>
      </section>
      <section className="home-suggestEvent-container">
        <h2 className="home-suggestEvent-title">Suggestions d'évènements</h2>
        <div className="container-suggestEvent"></div>
      </section>
    </div>
  );
}

export default Home;

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
        <h2 className="home-cardSports-title">Top sports</h2>
        <div className="container-card-sports">
          {sports
            // Ajout du filtre pour sélectionner les cards qu'on veut afficher
            .filter((sport) => [2, 5, 15, 3, 6, 11].includes(sport.id))
            .map((sports) => (
              <CardSports key={sports.id} sports={sports} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

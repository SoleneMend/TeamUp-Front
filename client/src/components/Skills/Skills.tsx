import { Gauge } from "lucide-react";
import "./Skills.css";

type Sport = {
  id: number;
  name: string;
  niveau: string;
  duration: number;
};

interface SkillsProps {
  sport: Sport[];
}

const Skills = ({ sport }: SkillsProps) => {
  const niveauToValue = (niveau: string): number => {
    if (niveau === "advanced") {
      return 75;
    } else if (niveau === "intermediate") {
      return 50;
    } else {
      return 25;
    }
  };

  return (
    <div className="skills">
      <div className="Skills-title-details">
        <div className="Skills-title">
          <p>
            <Gauge />
          </p>
          <h2>Skills Level</h2>
        </div>
      </div>

      {sport.map((element) => (
        <div key={element.id} className="skills__item">
          <div className="skills__item-header">
            <h3 className="skills__item-name">{element.name}</h3>
            <p className="skills__item-level">{element.niveau}</p>
          </div>
          <progress value={niveauToValue(element.niveau)} max={100} />
        </div>
      ))}
      <button type="button" className="skills__button">
        Voir les détails
      </button>
    </div>
  );
};

export default Skills;

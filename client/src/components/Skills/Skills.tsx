import { Gauge } from "lucide-react";
import "./Skills.css";
import type { Sport } from "../../services/useUsers";

const niveauMap: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Pro: 4,
};

interface SkillsProps {
  sport: Sport[];
}

const Skills = ({ sport }: SkillsProps) => {
  return (
    <div className="skills">
      <div className="Skills-title-details">
        <div className="Skills-title">
          <p>
            <Gauge />
          </p>
          <h2 className="text-switcher">Skills Level</h2>
        </div>
      </div>

      {sport.map((element) => (
        <div key={element.name} className="skills__item">
          <div className="skills__item-header">
            <h3 className="skills__item-name">{element.name}</h3>
            <p className="skills__item-level">{element.level}</p>
          </div>
          <progress value={niveauMap[element.level] ?? 0} max={4} />
        </div>
      ))}

      <button type="button" className="skills__button">
        Voir les détails
      </button>
    </div>
  );
};

export default Skills;

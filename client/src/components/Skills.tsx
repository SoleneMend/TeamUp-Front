type Sport = {
    id: number;
  name: string;
  niveau: string;
  duration: number;
}

interface SkillsProps {
  sport: Sport[];
}

const Skills = ({sport}:SkillsProps) => {
    return (
        <div>
            <h1>Skills levels</h1>
           {sport.map(element => (
            <div key={element.id}>
        <h1> {element.name}</h1>
         <p>{element.niveau}</p>
            </div>
           ))}
        <button>Voir les détails</button>

     </div>)
}

export default Skills;
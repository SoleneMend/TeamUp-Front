import { useState } from "react";
import "./ConversationList.css";

type Conversation = {
  id: number;
  name: string;
  preview: string;
  time: string;
  avatar: string;
};

const CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    name: "Yoan",
    preview: "Toujours dispo dimanche ?",
    time: "12:45",
    avatar: "Y",
  },
  {
    id: 2,
    name: "Léo",
    preview: "Ok pour la salle à 05h30.",
    time: "Hier",
    avatar: "L",
  },
  {
    id: 3,
    name: "Coline",
    preview: "J'apporte les balles !",
    time: "Lun",
    avatar: "C",
  },
  {
    id: 4,
    name: "Giogi",
    preview: "On fait un foot mardi, dispo ?",
    time: "Oct 12",
    avatar: "G",
  },
  {
    id: 5,
    name: "Solène",
    preview: "Chaud pour coder une base de données ?",
    time: "Oct 10",
    avatar: "S",
  },
];

interface ConversationListProps {
  onSelect: (name: string) => void;
}

const ConversationList = ({ onSelect }: ConversationListProps) => {
  const [selected, setSelected] = useState<number>(1);
  const [search, setSearch] = useState("");

  const filtered = CONVERSATIONS.filter((conv) =>
    conv.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (id: number, name: string) => {
    setSelected(id);
    onSelect(name);
  };

  return (
    <div className="conversation-list">
      <h2 className="conversation-list__title">Messages</h2>
      <input
        className="conversation-list__search"
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="conversation-list__items">
        {filtered.map((conv) => (
          <li
            key={conv.id}
            className={`conversation-list__item ${selected === conv.id ? "conversation-list__item--active" : ""}`}
            onClick={() => handleSelect(conv.id, conv.name)}
            onKeyDown={() => handleSelect(conv.id, conv.name)}
          >
            <div className="conversation-list__avatar">{conv.avatar}</div>
            <div className="conversation-list__info">
              <div className="conversation-list__row">
                <p className="conversation-list__name">{conv.name}</p>
                <p className="conversation-list__time">{conv.time}</p>
              </div>
              <p className="conversation-list__preview">{conv.preview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;

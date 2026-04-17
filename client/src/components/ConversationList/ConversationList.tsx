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
    name: "Alex M.",
    preview: "Toujours dispo dimanche ?",
    time: "12:45",
    avatar: "A",
  },
  {
    id: 2,
    name: "Coach Marcus",
    preview: "Séance confirmée pour 08h00.",
    time: "Hier",
    avatar: "M",
  },
  {
    id: 3,
    name: "Sarah L.",
    preview: "J'apporte les balles !",
    time: "Lun",
    avatar: "S",
  },
  {
    id: 4,
    name: "Sprint Dynamics",
    preview: "Nouveau rapport disponible.",
    time: "Oct 12",
    avatar: "SD",
  },
];

const ConversationList = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="conversation-list">
      <h2 className="conversation-list__title">Messages</h2>
      <input
        className="conversation-list__search"
        type="text"
        placeholder="Rechercher..."
      />
      <ul className="conversation-list__items">
        {CONVERSATIONS.map((conv) => (
          <li
            key={conv.id}
            className={`conversation-list__item ${selected === conv.id ? "conversation-list__item--active" : ""}`}
            onClick={() => setSelected(conv.id)}
            onKeyDown={() => setSelected(conv.id)}
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

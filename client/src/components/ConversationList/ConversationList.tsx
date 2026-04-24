import { useState } from "react";
import "./ConversationList.css";
import type { Users } from "../../services/useUsers";

interface ConversationListProps {
  users: Users[];
  onSelect: (name: string) => void;
}

const ConversationList = ({ users, onSelect }: ConversationListProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
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
        {filtered.map((user) => (
          <li
            key={user.id}
            className={`conversation-list__item ${selected === user.id ? "conversation-list__item--active" : ""}`}
            onClick={() => handleSelect(user.id, user.name)}
            onKeyDown={() => handleSelect(user.id, user.name)}
          >
            <div className="conversation-list__avatar">
              {user.name.charAt(0)}
            </div>
            <div className="conversation-list__info">
              <div className="conversation-list__row">
                <p className="conversation-list__name">{user.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;

import { useState } from "react";
import "./Chat.css";

import Chatbot from "../../components/Chatbot/Chatbot";
import ConversationList from "../../components/ConversationList/ConversationList";
import useUsers from "../../services/useUsers";

const Chat = () => {
  const users = useUsers();
  const [selectedUser, setSelectedUser] = useState<string>("");
  const contactName = selectedUser || users[0]?.name || "";

  return (
    <div className="chat-page">
      <ConversationList users={users} onSelect={setSelectedUser} />
      <Chatbot contactName={contactName} mode="chat" />
    </div>
  );
};

export default Chat;

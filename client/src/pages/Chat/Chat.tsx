import { useState } from "react";
import "./Chat.css";

import Chatbot from "../../components/Chatbot/Chatbot";
import ConversationList from "../../components/ConversationList/ConversationList";

const Chat = () => {
  const [selectedName, setSelectedName] = useState("Yoan C.");

  return (
    <div className="chat-page">
      <ConversationList onSelect={setSelectedName} />
      <Chatbot contactName={selectedName} />
    </div>
  );
};

export default Chat;

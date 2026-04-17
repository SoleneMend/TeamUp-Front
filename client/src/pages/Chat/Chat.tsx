import "./Chat.css";
import Chatbot from "../../components/Chatbot/Chatbot";
import ConversationList from "../../components/ConversationList/ConversationList";

const Chat = () => {
  return (
    <div className="chat-page">
      <ConversationList />
      <Chatbot />
    </div>
  );
};

export default Chat;

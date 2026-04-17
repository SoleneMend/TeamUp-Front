import { useState } from "react";
import "./Chatbot.css";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
};

const SYSTEM_PROMPT = `Tu es Alex, un assistant sympa et humain de la plateforme TeamUp.
TeamUp est une plateforme qui aide les gens à trouver des partenaires sportifs.
Ton rôle est d'aider l'utilisateur à trouver le partenaire idéal.
Tu poses des questions naturelles sur : le sport pratiqué, le niveau, la ville, les disponibilités.
Tu réponds de façon courte, chaleureuse et conversationnelle, comme un ami.
Tu n'utilises pas de listes ou de bullet points. Tu parles comme un humain.`;

const getTime = () =>
  new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "Salut ! Moi c'est Alex 👋 Je suis là pour t'aider à trouver ton partenaire sportif idéal. Tu pratiques quel sport ?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === "" || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
      time: getTime(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();
      const botReply = data.content[0].text;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: botReply,
          time: getTime(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Oups, une erreur s'est produite. Réessaie !",
          time: getTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot">
      <div className="chatbot__header">
        <div className="chatbot__header-icon">💬</div>
        <div>
          <p className="chatbot__name">Match Chat</p>
          <p className="chatbot__status">Assistant TeamUp en ligne</p>
        </div>
      </div>

      <div className="chatbot__messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chatbot__row chatbot__row--${message.role}`}
          >
            {message.role === "assistant" && (
              <div className="chatbot__avatar">A</div>
            )}
            <div className={`chatbot__bubble chatbot__bubble--${message.role}`}>
              {message.role === "assistant" && (
                <p className="chatbot__sender">Alex</p>
              )}
              <p className="chatbot__content">{message.content}</p>
              <p className="chatbot__time">{message.time}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chatbot__row chatbot__row--assistant">
            <div className="chatbot__avatar">A</div>
            <div className="chatbot__bubble chatbot__bubble--assistant chatbot__bubble--typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>

      <div className="chatbot__input-area">
        <input
          className="chatbot__input"
          type="text"
          placeholder="Écrire un message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="chatbot__send"
          onClick={sendMessage}
          disabled={isTyping}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

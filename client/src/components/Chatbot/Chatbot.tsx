import { useEffect, useState } from "react";
import type { Event } from "../../services/useEvents";
import "./Chatbot.css";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
};

const FALLBACK_RESPONSES = [
  "Oui super ! Dimanche ça me va parfaitement. Tu veux jouer où ?",
  "Bonne idée ! Quel sport tu avais en tête ?",
  "Avec plaisir ! Tu es plutôt quel niveau ?",
  "Carrément, je suis partant ! T'as un terrain en tête ?",
  "Nickel ! On se retrouve à quelle heure ?",
];

const getFallback = () =>
  FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];

const getTime = () =>
  new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

interface ChatbotProps {
  event?: Event;
  contactName?: string;
  mode?: "session" | "chat";
  onClose?: () => void;
}

const Chatbot = ({
  event,
  contactName: nameProp,
  mode = "chat",
  onClose,
}: ChatbotProps) => {
  const contactName = event?.name ?? nameProp ?? "Inconnu";

  const systemPrompt =
    mode === "session"
      ? `Tu es un assistant pour l'événement sportif "${contactName}" sur TeamUp.
Tu aides les participants à poser des questions sur l'événement : lieu, horaire, niveau requis, équipement.
Tu réponds de façon courte, chaleureuse et conversationnelle.
Tu n'utilises pas de listes ou de bullet points. Tu parles comme un humain.`
      : `Tu es un utilisateur sympa de la plateforme TeamUp.
Tu cherches quelqu'un pour faire du sport.
Tu poses des questions naturelles sur les disponibilités, le niveau, le terrain.
Tu réponds de façon courte, chaleureuse et conversationnelle, comme un ami.
Tu n'utilises pas de listes ou de bullet points. Tu parles comme un humain.`;

  const introMessage =
    mode === "session"
      ? `Salut ! Tu as des questions sur "${contactName}" ? Je suis là 👋`
      : `Salut ! C'est ${contactName} 👋 On fait du sport ensemble ?`;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content: introMessage,
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMessages([
      {
        id: 0,
        role: "assistant",
        content: introMessage,
        time: getTime(),
      },
    ]);
  }, [introMessage]);

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
          system: systemPrompt,
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
          content: getFallback(),
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
          <p className="chatbot__name">{contactName}</p>
          <p className="chatbot__status">En ligne</p>
        </div>
        {onClose && (
          <button type="button" className="chatbot__close" onClick={onClose}>
            ✕
          </button>
        )}
      </div>

      <div className="chatbot__messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chatbot__row chatbot__row--${message.role}`}
          >
            {message.role === "assistant" && (
              <div className="chatbot__avatar">{contactName.charAt(0)}</div>
            )}
            <div className={`chatbot__bubble chatbot__bubble--${message.role}`}>
              {message.role === "assistant" && (
                <p className="chatbot__sender">{contactName}</p>
              )}
              <p className="chatbot__content">{message.content}</p>
              <p className="chatbot__time">{message.time}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chatbot__row chatbot__row--assistant">
            <div className="chatbot__avatar">{contactName.charAt(0)}</div>
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

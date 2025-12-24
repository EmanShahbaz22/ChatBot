import { useState } from "react";
import "./App.css";
import robot from "./assets/robot.png";

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How may I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const getBotReplies = (userText) => {
    const text = userText.toLowerCase();

    if (text === "hi" || text === "hello" || text === "hey") {
      return [
        "Hi 👋",
        "I’m Emmi 🤖",
        "Nice to meet you 😊",
        "How can I help you today?",
      ];
    }

    if (text.includes("how are you")) {
      return [
        "I’m doing great 😄",
        "Thanks for asking!",
        "What can I help you with today?",
      ];
    }

    if (text.includes("react")) {
      return [
        "React is a great choice ⚛️",
        "It’s used for building modern UIs",
        "Do you want to learn basics or build a project?",
      ];
    }

    // default reply
    return [
      "Interesting 🤔",
      "Tell me more about that",
    ];
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const replies = getBotReplies(input);
    setInput("");

    replies.forEach((reply, index) => {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: reply },
        ]);
      }, (index + 1) * 900);
    });
  };

  return (
    <div className="app-container">

      {/* Robot */}
      <div className="robot-section">
        <img src={robot} alt="AI Robot" />
        <h1>How may I help you today?</h1>
      </div>

      {/* Chat */}
      <div className="chat-card">
        <div className="chat-header">
          <h2>Emmi</h2>
          <span>Online</span>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>

    </div>
  );
}

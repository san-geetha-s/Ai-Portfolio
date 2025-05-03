// components/ChatWidget.js

import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import QnAWidget from "./QnAWidget";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button className="chat-icon-button" onClick={toggleChat}>
        <FaCommentDots size={24} color="#fff" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="chat-popup">
          <button className="close-button" onClick={toggleChat}>×</button>
          <QnAWidget />
        </div>
      )}
    </>
  );
};

export default ChatWidget;

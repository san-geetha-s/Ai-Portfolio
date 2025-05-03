// components/ChatWidget.js

import React, { useState, useEffect } from "react";
import qaData from "../data/qaData"; // Must be an array of {question, answer}
import { FaCommentDots } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % qaData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setAnswer("");
    setShowAnswer(false);
  };

  const handleAsk = () => {
    setAnswer(qaData[currentIndex].answer);
    setShowAnswer(true);
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-icon-button" onClick={toggleChat}>
        <FaCommentDots size={24} color="#fff" />
      </button>

      {/* Popup Interface */}
      {isOpen && (
        <div className="chat-popup">
          <button className="close-button" onClick={toggleChat}>×</button>

          <input
            type="text"
            readOnly
            placeholder={qaData[currentIndex].question}
            className="chat-input"
          />
          <button className="chat-ask-button" onClick={handleAsk}>
            Ask
          </button>

          {showAnswer && (
            <div className="chat-answer">
              <strong>Answer:</strong> {answer}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;

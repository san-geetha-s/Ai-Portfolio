import React, { useEffect, useState } from 'react';

export default function About() {
  const [lines, setLines] = useState(['', '', '']);
  const fullText = [
    "Hello, I’m Sankita 👩‍💻",
    "I’m a self-taught developer driven by passion",
    "I create secure and stylish digital experiences.",
    "Welcome to my VS Code-themed portfolio!"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < fullText[currentIndex].length) {
        setLines((prev) => {
          const updatedLines = [...prev];
          updatedLines[currentIndex] = fullText[currentIndex].slice(0, charIndex + 1);
          return updatedLines;
        });
        charIndex++;
      } else {
        currentIndex++;
        charIndex = 0;
      }

      if (currentIndex >= fullText.length) {
        return;
      }

      setTimeout(typeText, 100); // Adjust typing speed
    };

    typeText(); // Start typing

  }, []);

  return (
    <div className="about-container">
      <p className="typed-text green-text">{lines[0]}</p>
      <p className="typed-text green-text">{lines[1]}</p>
      <p className="typed-text green-text">{lines[2]}</p>
    </div>
  );
}

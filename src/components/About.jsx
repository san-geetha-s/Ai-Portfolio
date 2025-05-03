import React, { useEffect, useState } from 'react';

export default function About() {
  const [lines, setLines] = useState(['', '', '']);
  const [darkMode, setDarkMode] = useState(true);

  const fullText = [
    "Hello, I’m Sangeetha 👩‍💻",
    "I’m a self-taught developer driven by passion",
    "I create secure and stylish digital experiences.",
    "Welcome to my VS Code-themed portfolio!"
  ];

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
  

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

      setTimeout(typeText, 100);
    };

    typeText();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className="about-container">
      <button onClick={toggleDarkMode} className="toggle-theme-btn">
        {lines.map((line, index) => (
          <p key={index} className="typed-text about-text">
            {line}
          </p>
        ))}
      </button>
    </div>
  );
}

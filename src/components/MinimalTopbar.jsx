import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function MinimalTopbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      {/* Social Icons on the Left */}
      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        
      </div>

      {/* Name in the Center */}
      <h1 className="text-3xl font-semibold text-center">Sangeetha</h1>

      {/* Dark Mode Toggle on the Right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-all duration-500 ease-in-out"
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 ease-in-out ${
            darkMode ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          {darkMode ? (
            <FaMoon className="text-gray-800 w-full h-full p-1" />
          ) : (
            <FaSun className="text-yellow-500 w-full h-full p-1" />
          )}
        </div>
      </button>
    </div>
  );
}

import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { FaSun, FaMoon } from 'react-icons/fa6'

export default function Topbar({ darkMode, setDarkMode }) {
  return (
    <div className="relative flex flex-col items-center justify-center mt-6 mb-4 transition-colors duration-700 ease-in-out">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-all duration-500 ease-in-out"
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

      {/* Profile Image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg transition-all duration-700 ease-in-out"
      />

      {/* Name */}
      <h1
        className={`mt-4 text-3xl font-semibold transition-colors duration-700 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Sankita
      </h1>

      {/* Social Links */}
      <div
        className={`flex gap-6 mt-3 text-2xl transition-colors duration-700 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Resume Download Button */}
      <a
        href="/Sankita_Resume.pdf"
        download
        className={`mt-4 px-4 py-2 flex items-center gap-2 transition-all duration-700 transform hover:scale-105 ${
          darkMode
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        } rounded-lg font-medium shadow-md`}
      >
        <FaDownload className="text-lg" />
        Download Resume
      </a>
    </div>
  )
}

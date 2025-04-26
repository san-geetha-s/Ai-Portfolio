import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

export default function Topbar() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-4">
      {/* Profile Image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
      />

      {/* Name */}
      <h1 className="mt-4 text-3xl font-semibold text-white">Sankita</h1>

      {/* Social Links */}
      <div className="flex gap-6 mt-3 text-white text-2xl">
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
        className="mt-4 px-4 py-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-md transition duration-300 transform hover:scale-105"
      >
        <FaDownload className="text-lg" />
        Download Resume
      </a>
    </div>
  )
}

// components/ProjectCard.jsx
export default function ProjectCard({ title, description, tech, liveLink }) {
    return (
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="text-sm text-gray-400 mb-4">
          <span className="font-medium">Tech Stack: </span>{tech}
        </div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Live Preview
        </a>
      </div>
    );
  }
  
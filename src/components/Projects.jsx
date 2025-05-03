const projects = [
  {
    title: "Netflix Clone",
    tech: "React, Firebase, TMDB API",
    description: "A Netflix look-alike with user authentication, movie categories, and a responsive UI.",
    live: "https://your-netflix-clone-link.vercel.app",
    github: "https://github.com/yourusername/netflix-clone",
  },
  {
    title: "Job Application Tracker",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: "A productivity tool to keep track of job applications, interview dates, and statuses.",
    live: "https://your-job-tracker-link.vercel.app",
    github: "https://github.com/yourusername/job-tracker",
  },
  {
    title: "Cybersecurity Awareness Quiz",
    tech: "React, Tailwind CSS",
    description: "An interactive quiz that educates users on basic cybersecurity practices.",
    live: "https://your-cyberquiz-link.vercel.app",
    github: "https://github.com/yourusername/cybersecurity-quiz",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#1e1e1e] text-white p-6 font-mono min-h-screen">
      <h2 className="text-2xl text-green-400 mb-6">// Projects</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#2a2a2a] p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            {/* Background iframe with blur effect */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${project.live}/screenshot.jpg)` }}></div>

            {/* Content area */}
            <div className="relative z-10">
              <h3 className="text-xl text-blue-300 font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.tech}</p>
              <p className="text-gray-300 mt-3">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-sm text-black px-4 py-2 rounded hover:bg-green-400 transition duration-300"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

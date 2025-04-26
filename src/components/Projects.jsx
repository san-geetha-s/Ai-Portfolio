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
      <div className="text-white p-4 bg-[#1e1e1e] font-mono">
        <h2 className="text-xl text-green-400 mb-4">// Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg text-blue-300">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.tech}</p>
            <p className="mt-1">{project.description}</p>
            <div className="mt-2 space-x-4">
              <a href={project.live} target="_blank" className="text-green-400 hover:underline">Live</a>
              <a href={project.github} target="_blank" className="text-green-400 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
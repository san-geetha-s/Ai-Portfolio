// src/app/components/Skills.js

export default function Skills() {
    const skills = [
      'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
      'Tailwind CSS', 'Git', 'GitHub', 'REST APIs'
    ];
  
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold mb-3">💡 Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <li key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
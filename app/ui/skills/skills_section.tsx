const skills = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'Express.js',
    'Node.js',
    'Flutter',
    'Dart',
    "Vercel",
    'Heroku',
    'Firebase',
    'Git',
    'GitHub',
    'GitLab',
    'Google Cloud Platform',
    'JavaScript',
    'HTML',
    'CSS',
];

export default function SkillsSection() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="grid justify-center content-center bg-sky-100 opacity-60 text-black p-4 rounded-lg shadow-md w-50 h-10">
            <p className="text-lg font-bold">{skill}</p>
            {/* Add additional details or icons if needed */}
          </div>
        ))}
      </div>
    );
  };
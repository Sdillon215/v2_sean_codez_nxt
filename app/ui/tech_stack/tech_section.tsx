const skills = [
    'React',
    'Next.js',
    "Vercel",
    'Tailwind CSS',
    'TypeScript',
    'GraphQL',
    'PostgreSQL',
    'Hasura',
    'MongoDB',
    'Express.js',
    'Node.js',
    'Flutter',
    'Dart',
    'Firebase',
    'Google Cloud',
    'Git',
    'GitHub',
    'GitLab',
    'JavaScript',
    'Heroku',
    'HTML',
    'CSS',
    'VS Code',
    'Android Studio',
];

export default function TechStackSection() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="grid justify-center text-center content-center bg-sky-100 opacity-60 text-black p-4 rounded-lg shadow-md w-50 h-12">
            <p className="text-lg font-bold">{skill}</p>
            {/* Add additional details or icons if needed */}
          </div>
        ))}
      </div>
    );
  };
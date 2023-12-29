import { projectData } from '@/app/lib/project_data';
import { Project } from '@/app/lib/definitions';
import Link from 'next/link';


export default async function ProjectCards() {
  return (
    <>
      {projectData.map(((project) =>
        <Card projKey={project.id} project={project} />))}
    </>
  );
}

export function Card({
  projKey,
  project
}: {
  projKey: string;
  project: Project;
}) {

  return (
    <Link key={projKey} href={`/projects/${project.id}`}>
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          <h3 className="ml-2 text-sm font-medium">{project.title}</h3>
        </div>
        <p
          className="truncate rounded-xl bg-gray-700 px-4 py-8 text-center text-2x"
        >
          {project.description}
        </p>
      </div>
    </Link>
  );
}

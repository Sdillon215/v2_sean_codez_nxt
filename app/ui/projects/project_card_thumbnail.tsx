import { projectData } from '@/app/lib/project_data';
import { Project } from '@/app/lib/definitions';
import Link from 'next/link';
import Image from 'next/image';
import jtree_sunset from '/public/jtree_sunset.jpg';


export default async function ProjectCardThumbnail() {
  return (
    <>
      {projectData.map(((project) =>
        <Card key={project.id} project={project} />))}
    </>
  );
}

export function Card({
  project
}: {
  project: Project;
}) {

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="relative flex items-end rounded-xl overflow-clip bg-gray-50 shadow-sm h-[100%] w-[92vw] md:w-[30vw] aspect-video">
        <Image
          src={project.imgPath.toString()}
          alt="background image of dusk in Joshua Tree National Park"
          fill
          priority
          placeholder="blur"
          blurDataURL={project.imgPath.toString()}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="z-0"
        />

        <div className="relative z-10 bg-gray-700/70 p-2 h-1/2 w-full flex-col items-start justify-center overflow-auto">
          <p className="text-xl text-white font-bold">{project.title}</p>
          <p className="text-md text-white">{project.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}

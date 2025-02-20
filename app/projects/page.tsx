import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '@/app/lib/project_data';

export default function Page() {

  return (
    <div className="grid content-center justify-items-center text-center">
      <div className="flex flex-col gap-2 justify-center items-center text-center max-w-screen-lg h-[60vh] p-4">
        <h1 className="text-6xl md:text-8xl border-b-2 min-w-[90vw] md:min-w-[100px] p-2 w-1/2">Projects</h1>
        <h4 className="text-1xl md:text-2xl w-full md:w-2/3">Here are a few of my projects. To view even more of my work or to check out the associated code bases feel free to visit my Github!</h4>
        <Link className="w-24 m-4" target="_blank" href="https://github.com/Sdillon215">
          <FontAwesomeIcon className="w-24" icon={faGithub} />
        </Link>
      </div>
      {projectData.map((project) => (
        <div key={project.title} className="max-w-screen-2xl bg-gray-700/70 md:rounded-lg mb-4 md:p-4">
          <h1 className="text-3xl md:text-5xl md:w-1/2 p-4">{project!.title}</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-[19/9]">
              <Link href={project!.url} target='_blank'>
                <Image
                  src={project!.imgPath.toString()}
                  alt={project!.imgAltText}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL={project!.imgPath.toString()}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="z-0"
                />
              </Link>
            </div>
            <div className="md:col-span-1 md:grid md:content-around">
              <div className="px-4 w-full">
                <p className="text-sm md:text-base">{project!.fullDescription}</p>
              </div>
              <div className="w-full flex items-start justify-center p-4">
                <div className="flex flex-wrap justify-center gap-4">
                  {project!.techStack.map((tech, index) => (
                    <div key={index} className="grid justify-center text-center content-center bg-sky-100 opacity-60 text-black p-4 rounded-lg shadow-md w-50 h-10">
                      <p className="text-md font-bold">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
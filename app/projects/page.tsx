import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Page() {

  return <div className="grid h-full gap-1 opacity-70 rounded-xl place-content-center text-center content-center place-items-center p-8">
    <h1 className="text-4xl font-bold border-b-2 min-w-[90vw] md:min-w-[100px] p-2 w-1/2">Projects</h1>
    <h4 className="text-1xl md:text-2xl font-bold w-full md:w-2/3">Here are a few of my recent projects. To view even more of my work or to check out the associated code bases feel free to visit my Github!</h4>
    <Link className="w-24 m-4" target="_blank" href="https://github.com/Sdillon215">
      <FontAwesomeIcon icon={faGithub} />
    </Link>
  </div>;
}
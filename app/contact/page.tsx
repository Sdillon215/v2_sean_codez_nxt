import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Page() {

  return <div className="grid h-screen gap-1 opacity-70 rounded-xl place-content-center text-center content-center place-items-center p-8">
      <h1 className="text-4xl font-bold border-b-2 min-w-[90vw] md:min-w-[100px] p-2 w-1/2">Contact</h1>
      <h4 className="text-1xl md:text-2xl font-bold w-full md:w-2/3">If you are interested in working together please feel free to reach out through LinkedIn!</h4>
    <Link className="w-24 m-4 mt-28" target="_blank" href="https://www.linkedin.com/in/seandillon215/">
      <FontAwesomeIcon icon={faLinkedin} />
    </Link>
  </div>;
}
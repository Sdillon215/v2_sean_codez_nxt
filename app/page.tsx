import Link from 'next/link';
import NavLinks from './ui/nav/nav';
import Image from 'next/image';
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="h-screen p-2">
      {/* <Image
        src="/home-bg-mb.jpg"
        fill
        className="opacity-60 block md:hidden -z-100"
        style={{ objectFit: "cover" }}
        alt="background image of an alpine lake in Yosemite National Park"
      />
      <Image
        src="/home-bg.jpg"
        fill
        className="opacity-60 hidden md:block -z-100"
        style={{ objectFit: "cover", objectPosition: "bottom right" }}
        alt="background image of an alpine lake in Yosemite National Park"
      /> */}
      <div className="grid content-end text-center min-h-[42%]  opacity-60">
        <h1 className="text-5xl font-bold">Sean Dillon</h1>
        <h4 className="font-bold">Nomad | Full Stack Engineer | Climber</h4>
      </div>
      <div className="grid content-start place-content-center min-h-[57%] pb-4">
        <Link
          key="About-home"
          href="/about"
          className="flex justify-center items-center w-40 gap-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-30 text-black hover:text-white p-2 px-3 m-8"
        >
          <h4 className="font-bold hover:opacity-100">Learn More</h4>
          <ArrowRightIcon className="w-5" />
        </Link>
      </div>
      <div className="absolute items-center bottom-0 left-0 p-2">
        <p className="text-xs">
          by Sean_Codez
        </p>
      </div>
    </main>
  )
}

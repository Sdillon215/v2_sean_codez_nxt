import Link from 'next/link';
import Image from 'next/image';
import homeBgDesktop from '/public/home-bg.jpg';
import homeBgMobile from '/public/home-bg-mb.jpg';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="h-screen w-screen p-2 relative">
      <Image
        priority={true}
        src={homeBgMobile}
        fill
        placeholder="blur"
        className="z-0 block lg:hidden"
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        alt="background image of an alpine lake in Yosemite National Park"
        />
      <Image
        priority={true}
        src={homeBgDesktop}
        fill
        placeholder="blur"
        className="z-0 hidden lg:block"
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "bottom right" }}
        alt="background image of an alpine lake in Yosemite National Park"
      />
      <div className="grid content-end text-center min-h-[42%]  opacity-60 z-1">
        <h1 className="text-6xl font-bold">Sean Dillon</h1>
        <h4 className="text-1xl md:text-2xl font-bold">Nomad | Full Stack Engineer | Climber</h4>
      </div>
      <div className="grid content-start place-content-center min-h-[57%] pb-4 z-1">
        <Link
          key="About-home"
          href="/about"
          className="flex justify-center items-center w-40 gap-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white p-2 px-3 m-8"
        >
          <h4 className="font-bold">Learn More</h4>
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

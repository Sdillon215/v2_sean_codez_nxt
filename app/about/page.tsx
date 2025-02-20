import Image from "next/image";
import AboutSection from "@/app/ui/about_section/about_section";
import TechStackSection from "@/app/ui/tech_stack/tech_section";
import meStill from "@/public/me_yup_still_me.png";
import Link from "next/link";
import EducationSection from "@/app/ui/education/education_section";
import ExperienceSection from "@/app/ui/experience/experience_section";

export default function Page() {
  return (
    <main className="grid mx-auto gap-4 py-8 md:px-8 min-h-screen max-w-screen-2xl">
      <div className="grid gap-4 content-center justify-items-center text-center h-screen">
        <Image
          priority
          src={meStill}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-90 h-[40vh] w-[40vh] rounded-3xl"
          alt="Sean's portrait photo"
        />
        <div className=" grid gap-1 opacity-70 rounded-xl">
          <h1 className="text-5xl border-b-2 min-w-[90vw] md:min-w-[100px] p-2">{`Hi, I'm Sean`}</h1>
          <h4 className="text-1xl md:text-2xl">Nomad | Full Stack Engineer | Climber</h4>
          <h4 className="text-1xl md:text-2xl">Autodidact | Entrepreneur | Explorer</h4>
          <h4 className="text-1xl md:text-2xl">Skier | Adventurer | Writer</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 content-center justify-items-center text-center">
          <a
            href="#story"
            className="w-40 p-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4>My Story</h4>
          </a>
          <a
            href="#tech"
            className="w-40 p-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4>Tech Stack</h4>
          </a>
          <a
            href="#education"
            className="w-40 p-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4>Resume</h4>
          </a>
          <Link
            key="Projects-page"
            href="/projects"
            className="w-40 p-2 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4>Projects</h4>
          </Link>
        </div>
      </div>
      <div id="story">
        <AboutSection
          imgPath="/mug-portrait.jpg"
          imgRight={false}
          altText="Sean at campsite laughing with coffee mug in hand"
          title="My Story"
          bodyText="After finding my passion in rock climbing and traveling I 
          fell in love with the beauty of the experiences one is privileged to have 
          when they're able to travel freely. There's something magical to be found 
          in life when financial and time constraints are not the main factors driving one's 
          choices. This is not a luxury that most people are able to or are willing to pursue."
        />
      </div>
      <AboutSection
        imgPath="/climbing.jpg"
        imgRight={true}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title=""
        bodyText="Previously, a climbing guide and mentor at a therapeutic boarding school 
        for at risk teens, I was able to enjoy and share my passion for climbing, mountain biking, 
        and skiing with the students. Maintaining a healthy work-life balance allowed 
        ample time to travel. However, there came a point when I knew I needed to find a way to 
        make a living while traveling if I ever wanted to pursue my passions to their fullest extent."
      />
      <AboutSection
        imgPath="/taco-drift.jpg"
        imgRight={false}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title=""
        bodyText="I began learning to write code and eventually took a Full-Stack Web Development course at The University of Utah 
        and since have continued to self-teach as well as gain professional experience with many other languages and frameworks. I've always had an inclination to 
        understand how things work and am naturally adept at the problem solving and self-reliance associated with fixing or building things. 
        I've found that this quality serves me very well in software development and I've focused my energy on mastering  
        the art of learning new languages rather than mastering any one language."
      />
      <AboutSection
        imgPath="/bv_van.webp"
        imgRight={true}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title=""
        bodyText="After coding professionally for several years now I have been able to gain some incredible experience that has continued to 
          push my personal development as an engineer further and further. This has also enabled me to fulfill my long time goal of 
          building a skill set that enables me to sustainably travel and work from anywhere in the world. Coding is my key to the world and the lifestyle 
          that I'm incredibly passionate about and therefore I am equally passionate about the projects that I work on. 
          Please feel free to reach out to me if you're interested in working together or if you have any questions about my work."
      />
      <div id="tech" className="grid justify-items-center gap-4">
        <h1 className="text-4xl border-b-2 pb-2 w-screen-md w-1/2 text-center">Tech Stack</h1>
        <TechStackSection />
      </div>
      <div id="education" className="grid justify-items-center gap-4 shadow-lg rounded-lg z-10 opacity-70">
        <h1 className="text-4xl border-b-2 pb-2 w-screen-md w-1/2 text-center">Education</h1>
        <EducationSection />
      </div>
      <div id="experience" className="grid justify-items-center gap-4 shadow-lg rounded-lg z-10 opacity-70">
        <h1 className="text-4xl border-b-2 pb-2 w-screen-md w-1/2 text-center">Experience</h1>
        <ExperienceSection />
      </div>
      <div className="absolute items-center bottom-0 left-0 p-2">
        <p className="text-xs">
          by Sean_Codez
        </p>
      </div>
    </main>
  )
}
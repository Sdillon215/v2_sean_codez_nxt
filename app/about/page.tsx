import Image from "next/image";
import AboutSection from "@/app/ui/about_section/about_section";
import SkillsSection from "@/app/ui/skills/skills_section";
import meFire from "@/public/me-fire2.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="grid mx-auto gap-4 py-8 md:px-8 min-h-screen max-w-screen-2xl">
      <div className="grid gap-4 content-center justify-items-center text-center h-screen">
        <Image
          priority
          src={meFire}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-90 h-[250px] w-[250px] rounded-full shadow-lg"
          alt="Sean's portrait photo"
        />
        <div className=" grid gap-1 opacity-70 shadow-lg rounded-xl">
          <h1 className="text-4xl font-bold border-b-2 min-w-[90vw] md:min-w-[100px] p-2">Hi, I'm Sean</h1>
          <h2 className="text-2xl font-bold pb-4 max-w-6xl">
            Imagine working with a developer who is just as passionate about your project or business as you are.
            Wouldn't you expect the quality of engineering to exceed the norm if every developer on your project or team was just as personally
            invested in it's success as you are? In a time and industry where passion is often overwhelmed by 'good enough' Devs and the best solutions
            are undercut by almost 'good enough' out of the box tech, it's even more important to find developers who are passionate about what they're building.
            <br />
            <br />
            I'm that Developer.
          </h2>
          {/* <h4 className="text-1xl md:text-2xl font-bold">Nomad | Full Stack Engineer | Climber</h4>
          <h4 className="text-1xl md:text-2xl font-bold">Autodidact | Business Owner | Explorer</h4>
          <h4 className="text-1xl md:text-2xl font-bold">Builder | Entrepreneur | Author</h4>
          <h4 className="text-1xl md:text-2xl font-bold">Skier | Intellectual | River Rat</h4> */}
        </div>
        <div className="grid grid-cols-2 gap-4 content-center justify-items-center text-center">
          <a
            href="#story"
            className="w-40 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4 className="font-bold">My story</h4>
          </a>
          <a
            href="#skills"
            className="w-40 rounded-lg bg-sky-100 hover:bg-slate-500 opacity-60 text-black hover:text-white"
          >
            <h4 className="font-bold">My Skills</h4>
          </a>
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
          choices. This is not a luxury that most people are able to have or are willing to pursue."
        />
      </div>
      <AboutSection
        imgPath="/climbing.jpg"
        imgRight={true}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title=""
        bodyText="Previously, a climbing guide and mentor at a therapeutic boarding school 
        for at-risk youth, I was able to enjoy and share my passion for climbing, mountain biking, 
        and skiing with the students as well as maintain a healthy work-life balance with 
        ample time to travel. However, there came a point when I knew I needed to find a way to 
        make a living while traveling if I ever wanted to pursue my passions to their fullest extent."
      />
      <AboutSection
        imgPath="/taco-drift.jpg"
        imgRight={false}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title=""
        bodyText="I began learning to write code and eventually took a Full-Stack Web Development course 
        and since continued to self-teach many other languages and frameworks. I've always had an inclination to 
        understand how things work and been adapt at the problem solving associated with fixing or building things. 
        I've found that this skill translates incredibly well to software development. There's a self-reliance in those who 
        are willing to self teach and learn outside of traditional education systems that cannot be taught in a classroom."
      />
        <AboutSection
          imgPath="/bv_van.webp"
          imgRight={true}
          altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
          title=""
          bodyText="I've been coding professionally for several years now and have been able to gain some incredible experience that has continued to 
          push my personal development as an engineer further and further. This has also enabled me to fulfill my dream of building a van 
          with a full office and living space that has been designed to allow sustainable and comfortable work and travel. This career is the key 
          to my lifestyle that I love and that is why I'm so passionate about the projects I work on. Please feel free to reach out if you'd 
          like to work together or just want to chat about the travel, climbing, or coding."
        />
      <div id="skills" className="grid justify-items-center gap-4">
        <h1 className="text-4xl font-bold border-b-2 pb-2 w-screen-md w-1/3 text-center">My Skills</h1>
        <SkillsSection />
      </div>
      <div className="absolute items-center bottom-0 left-0 p-2">
        <p className="text-xs">
          by Sean_Codez
        </p>
      </div>
    </main>
  )
}
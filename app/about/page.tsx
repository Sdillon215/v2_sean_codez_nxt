import climbing from "/public/climbing.jpg";
import mug from "/public/mustache_mug.jpg";
import van from '/public/bv_van.webp';
import tacoDrift from '/public/taco_drift.jpg';
import AboutSection from "@/app/ui/about_section/about_section";

export default function Page() {
  return (
    <main className="grid mx-auto gap-4 py-8 md:px-8 min-h-screen max-w-screen-2xl">
      <div className="grid gap-4 content-center text-center h-screen opacity-60 pb-32">
        <h1 className="text-6xl font-bold">About Me</h1>
        <h4 className="text-1xl md:text-2xl font-bold">Nomad | Full Stack Engineer | Climber</h4>
        <h4 className="text-1xl md:text-2xl font-bold">Autodidact | Business Owner | Explorer</h4>
        <h4 className="text-1xl md:text-2xl font-bold">Builder | Entrepreneur | Author</h4>
        <h4 className="text-1xl md:text-2xl font-bold">Skier | Intellectual | River Rat</h4>
      </div>
      <AboutSection
        img={mug}
        imgRight={false}
        altText="Sean at campsite laughing with coffee mug in hand"
        title="Component title"
        bodyText="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
      />
      <AboutSection
        img={van}
        imgRight={true}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title="Component van title"
        bodyText="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
      />
      <AboutSection
        img={tacoDrift}
        imgRight={false}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title="Component drift title"
        bodyText="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
      />
      <AboutSection
        img={climbing}
        imgRight={true}
        altText="Sean\'s van/mobile office parked in the desert with a mountain in the background"
        title="Component drift title"
        bodyText="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
      />
      <div className="absolute items-center bottom-0 left-0 p-2">
        <p className="text-xs">
          by Sean_Codez
        </p>
      </div>
    </main>
  )
}
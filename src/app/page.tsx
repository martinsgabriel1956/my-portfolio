import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />

    </>
  );
}

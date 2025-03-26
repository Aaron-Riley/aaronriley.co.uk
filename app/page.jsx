import Hero from "./Hero";
import AboutMe from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="bg-neutral-900">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

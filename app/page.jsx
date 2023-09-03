import Landing from "./landing";
import AboutMe from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <main class="bg-neutral-900">
     <Landing />
     <AboutMe />
     <Projects />
      <Contact />
    </main>
  )
}
import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./sections/Experience";
import Research from "./sections/Research";
import Projects from "./sections/Projects";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Life from "./components/Life";
import Contact from "./components/Contact";
function Portfolio() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <TechStack />
        <Research />
        <Projects />
        <Life />
        <Contact /> 
      </main>
    </div>
  );
}

export default Portfolio;
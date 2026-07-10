import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import MissionCard from "../components/MissionCard";

import Panel from "../components/layout/Panel";
import Profile from "../components/sections/Profile";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

import { useRef } from "react";

function Dasboard() {
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);
  const panelRef = useRef(null);

  const terminalRef = useRef(null);

  const sectionRefs = (key) => {
    setTimeout(() => {
      switch (key) {
        case "profile":
          profileRef.current?.scrollIntoView({
            behavior: "smooth",
          });
          console.log("finished");

          break;

        case "projects":
          projectRef.current?.scrollIntoView({
            behavior: "smooth",
          });

          break;

        case "skills":
          skillsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          console.log(skillsRef.current.getBoundingClientRect());

          break;

        case "journey":
          journeyRef.current?.scrollIntoView({
            behavior: "smooth",
          });

          break;

        case "contact":
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
          });

          break;

        default:
          break;
      }
    }, 500);
  };

  const runCommnad = async (cmd) => {
    // Only on mobile
    if (window.innerWidth < 768) {
      panelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Wait for the scroll animation to finish
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    terminalRef.current.executeCommand(cmd);
  };
  return (
    <div className="min-h-screen bg-slate-950 ">
      <Header />

      <main className="py">
        <Hero />

        <section className="grid md:grid-cols-2 gap-6 px-6 py-4">
          <MissionCard onCommand={runCommnad} />

          <div ref={panelRef}>
            <Panel sectionScroll={sectionRefs} ref={terminalRef} />
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-2">
          <div ref={profileRef}>
            <Profile />
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dasboard;

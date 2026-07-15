import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";

import Panel from "../components/layout/Panel";
import Profile from "../components/sections/Profile";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

function Dasboard() {
  return (
    <div className="min-h-screen bg-gray-950 ">
      <Header />

      <main className="py">
        <Hero />

        <section className="mt-8 flex flex-col gap-2">
          <div>
            <Profile />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Skills />
          </div>

          <div>
            <Contact />
          </div>

          <div>
            <Panel />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dasboard;

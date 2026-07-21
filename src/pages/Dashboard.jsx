import Header from "../components/common/Header";

import Panel from "../components/common/Panel";
import Profile from "../sections/Profile";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function Dasboard() {
  return (
    <div className="min-h-screen bg-slate-900 ">
      <Header />

      <main>
        <section className="space-y-20 ">
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

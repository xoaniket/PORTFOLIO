import Header from "../components/common/Header";

import Profile from "../sections/Profile";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import { useRef } from "react";

function Dasboard() {
  const contactRef = useRef(null);
  return (
    <div className="min-h-screen bg-slate-900 ">
      <Header />

      <main>
        <section className="space-y-20 ">
          <div>
            <Profile contactRef={contactRef} />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Skills />
          </div>

          <div>
            <Contact ref={contactRef} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dasboard;

import taskoraImg from "/images/taskora.png";
import AiChefClaude from "/images/AIChef.png";
import Tenzis from "/images/tenzis.png";
import Job from "/images/insidejob.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TASKORA",
      description:
        "A full-stack task management application with JWT authentication, allowing users to securely manage their daily tasks.",
      stack: ["React", "Tailwind CSS", "Django", "DRF"],
      github: "https://github.com/xoaniket/taskora",
      live: "https://taskora-xoxo.vercel.app",
      screenshot: taskoraImg,
    },
    {
      id: 2,
      title: "AI CHEF CLAUDE",
      description:
        "An AI-powered recipe generator that creates personalized recipes from ingredients provided by the user.",
      stack: ["React", "Tailwind CSS", "Claude API"],
      github: "YOUR_GITHUB_LINK",
      live: "https://xochefclaude.netlify.app/",
      screenshot: AiChefClaude,
    },
    {
      id: 3,
      title: "TENZIES",
      description:
        "A fun React dice game where players roll until all dice match while strategically holding selected dice.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      github: "YOUR_GITHUB_LINK",
      live: "https://xo-tenzis.netlify.app/",
      screenshot: Tenzis,
    },
    {
      id: 4,
      title: "INSIDE JOB",
      description:
        "A job application platform where users can browse job listings, apply for jobs, and track their applications through a clean and responsive interface.",
      stack: ["JavaScript", "Python", "CSS", "Django"],
      github: "YOUR_GITHUB_LINK",
      live: "https://insidejob.onrender.com",
      screenshot: Job,
    },
  ];
  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-10">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">PROJECTS</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-3 bg-slate-950/60">
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-xl text-white border border-cyan-500/20 p-6 "
            >
              <img
                src={item.screenshot}
                alt={item.title}
                className=" rounded-lg object-cover border border-cyan-500/20"
              />
              <h1 className="text-white font-bold text-2xl mt-5 mb-2">
                {item.title}
              </h1>
              <span className="text-gray-500 text-sm leading-6">
                {item.description}
              </span>

              {/* STACK USED.............................................................................. */}
              <div className="mt-8 flex flex-wrap gap-4">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-cyan-400 rounded-full border px-4 py-2 border-cyan-500/20 transition-all duration-300 hover:translate-y-1 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* live links............................................ */}
              <div className="mt-6 flex gap-4">
                <a
                  className="rounded-md border border-emerald-500/30 px-4 py-2 text-emerald-400 hover:bg-emerald-500/10"
                  href={item.live}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href={item.github}
                  target="blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-cyan-500/30 px-4 py-2 text-cyan-400 hover:bg-cyan-500/10"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

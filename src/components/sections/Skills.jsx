import { FaTools } from "react-icons/fa";
import { FaCode, FaDatabase } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: GrPersonalComputer,
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: IoSettings,
      technologies: [
        "Django",
        "Django REST Framework",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      category: "Languages",
      icon: FaCode,
      technologies: ["Python", "JavaScript", "C"],
    },
    {
      category: "Database",
      icon: FaDatabase,
      technologies: ["PostgreSQL", "SQLite", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      icon: FaTools,
      technologies: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
    },
  ];

  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-5 lg:p-10">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">SKILLS</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 ">
        {skills.map(({ category, technologies, icon: Icon }) => (
          <div
            key={category}
            className="cursor-target rounded-lg border border-cyan-500/20 bg-slate-950/60 p-6 
            hover:-translate-y-1 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
          >
            <h2 className="orbitron  flex items-center gap-2 mb-5 text-xl font-bold text-cyan-400">
              <Icon className="text-xl" />
              {category}
            </h2>

            <div className="flex  flex-wrap gap-3 mt-auto">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-cyan-500/20 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 hover:translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

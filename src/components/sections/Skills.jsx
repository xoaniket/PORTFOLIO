export default function Skills() {
  const skills = [
    {
      category: "Frontend",
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
      technologies: [
        "Django",
        "Django REST Framework",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      category: "Languages",
      technologies: ["Python", "JavaScript", "C"],
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "SQLite", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
    },
  ];
  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm  p-10">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">SKILLS</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((item) => (
          <div
            key={item.category}
            className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-6 flex flex-col"
          >
            <h2 className="orbitron mb-5 text-lg font-semibold text-cyan-400">
              {item.category}
            </h2>

            <div className="flex flex-wrap gap-3 mt-auto">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 hover:translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
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

import skills from "../Data/skills";

export default function Skills() {
  return (
    <section className=" bg-slate-900/60 backdrop-blur-sm p-5 lg:p-10">
      <h2 className="orbitron text-center lg:text-left lg:ml-6 mb-4 text-4xl text-cyan-400">
        SKILLS
      </h2>
      <div className="grid gap-4 md:grid-cols-2 border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-slate-950 rounded-2xl p-8">
        {skills.map(({ category, technologies, icon: Icon }) => (
          <div
            key={category}
            className="cursor-target rounded-lg border border-cyan-500/20 bg-slate-900/60 p-6 
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

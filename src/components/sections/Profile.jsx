function Profile() {
  const profileData = [
    {
      label: "Name",
      value: "Aniket Chauhan",
    },
    {
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      label: "Experience",
      value: "Fresher",
    },
    {
      label: "Location",
      value: "India",
    },
  ];

  const myStack = ["React", "Django", "Python", "JavaScript", "Tailwind CSS"];
  return (
    <section className="rounded-xl border border-cyan-500/20 backdrop-blur-sm shadow-2xl p-6 bg-slate-900/60">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">PERSONNEL FILE</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="px-5 grid gap-12 grid-cols-[180px_1fr] items-center mx-auto max-w-4xl">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-cyan-400">
          <span className="text-7xl">👤</span>
        </div>
        <div className=" grid gap-4 md:grid-cols-2">
          {profileData.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-cyan-500/20 bg-slate-950/50 p-4 transition hover:border-cyan-400/50"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 font-mono text-lg text-cyan-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-slate-950/40 p-6">
        <h4 className="mb-3 text-xl text-cyan-400 orbitron tracking-wider">
          PROFESSIONAL SUMMARY
        </h4>

        <p className="mt-5 max-w-4xl leading-7 text-slate-300">
          I'm a Full Stack Developer passionate about building modern,
          responsive web applications with React and Django. I enjoy solving
          real-world problems, learning new technologies, and writing clean,
          maintainable code while continuously improving my development skills.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-slate-950/40 p-6">
        <h4 className="mb-4 orbitron text-cyan-400 tracking-wider">MY STACK</h4>

        <div className="flex flex-wrap gap-3">
          {myStack.map((stack) => {
            return (
              <span
                key={stack}
                className="text-cyan-300 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-400 bg-slate-950 px-4 py-2
                 transition-all duration-300 hover:translate-y-1 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20 font-medium
                 "
              >
                {stack}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Profile;

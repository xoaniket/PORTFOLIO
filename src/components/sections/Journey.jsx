export default function Contact() {
  const contacts = [
    {
      title: "EMAIL",
      value: "fiftyaniket2000@gmail.com",
      href: "mailto:fiftyaniket2000@gmail.com",
    },
    {
      title: "GITHUB",
      value: "github.com/xoaniket",
      href: "https://github.com/xoaniket",
    },
    {
      title: "LINKEDIN",
      value: "linkedin.com/in/aniket-chauhan-1527041bb",
      href: "https://www.linkedin.com/in/aniket-chauhan-1527041bb",
    },
    {
      title: "LOCATION",
      value: "India",
      href: null,
    },
  ];

  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-10">
      <header className="mb-10 flex items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">CONTACT TERMINAL</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="flex justify-center">
        <div
          className="
            relative
            w-full
            max-w-2xl
            overflow-hidden
            rounded-2xl
            border
            border-cyan-400/30
            bg-slate-950/80
            p-8
            backdrop-blur-md
            shadow-[0_0_25px_rgba(34,211,238,.15)]
            transition-all
            duration-500
            hover:border-cyan-300
            hover:shadow-[0_0_45px_rgba(34,211,238,.3)]
          "
        >
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.4) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Scan Line */}
          <div className="absolute left-0 top-0 h-1 w-full animate-scan bg-cyan-400/60"></div>

          <div className="relative z-10">
            <h2 className="orbitron text-4xl text-cyan-300">ANIKET CHAUHAN</h2>

            <p className="mt-2 tracking-[0.3em] text-slate-400 uppercase">
              Full Stack Developer
            </p>

            <div className="my-8 h-px bg-cyan-500/20"></div>

            <div className="space-y-6">
              {contacts.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between gap-6 border-b border-cyan-500/10 pb-3"
                >
                  <span className="w-28 text-xs tracking-[0.25em] text-cyan-400">
                    {item.title}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-right text-slate-300 transition hover:text-cyan-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-right text-slate-300">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-cyan-500/20 pt-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  STATUS
                </p>

                <p className="mt-2 flex items-center gap-2 text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                  AVAILABLE FOR WORK
                </p>
              </div>

              <p className="font-mono text-cyan-400 animate-pulse">
                &gt; CONNECTING_
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "fiftyaniket2000@gmail.com",
      href: "mailto:fiftyaniket2000@gmail.com",
    },
    {
      title: "GitHub",
      value: "github.com/xoaniket",
      href: "https://github.com/xoaniket",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/",
      href: "https://www.linkedin.com/in/aniket-chauhan-1527041bb",
    },
    {
      title: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-5 lg:p-10">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">CONTACT</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="flex justify-center">
        <div
          className="relative max-w-2xl w-full rounded-xl p-8 text-white border border-cyan-500/30 bg-slate-950/60 backdrop-blur-md
      shadow-[0_0_25px_rgba(38,211,238,.15)] hover:shadow-[0_0_30px_rgba(38,211,238,.35)] 
      hover:border-cyan-400 transition-all duration-500"
        >
          <div className="animate-pulse absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-cyan-400/60"></div>
          <div className="animate-pulse absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-cyan-400/60"></div>

          {/* SCAN LINE............................ */}
          <div className="absolute animate-scan left-0 top-0 h-1 w-full animate-scan bg-cyan-400/60"></div>

          {/* NAME AND TAG........................................................... */}
          <div className="flex justify-center pb-6  border-b border-cyan-500/30">
            <div className="w-full max-w-xl">
              <div className="relative overflow-hidden rounded-xl  ">
                <h2 className="orbitron text-4xl text-cyan-400">
                  ANIKET CHAUHAN
                </h2>

                <p className="mt-2 text-slate-400 tracking-[0.3em] uppercase">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT DETAILS.............................................................. */}
          <div className="my-8 ">
            {contacts.map((item) => {
              const Card = (
                <div
                  key={item.title}
                  className="flex items-center  justify-between   p-4 bg-slate-950/60 "
                >
                  <h2 className="tracking-[0.2em] text-xs uppercase text-cyan-500">
                    {item.title}
                  </h2>
                  <p className="text-slate-300 transition-colors duration-300 hover:text-cyan-300">
                    {item.value}
                  </p>
                </div>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {Card}
                </a>
              ) : (
                <div key={item.title}>{Card}</div>
              );
            })}
          </div>

          {/* LAST STAUTUS LINE.................................................................. */}
          <div className=" pt-6 flex justify-between items-center border-t border-cyan-500/20">
            <div className="text-white">
              <p className="text-gray-600 tracking-[0.3em] text-sm">STATUS</p>
              <p className="mt-2 flex items-center gap-2 text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                AVAILABLE FOR WORK
              </p>
            </div>
            <div className="animate-pulse font-mono text-cyan-500 ">
              &gt; CONNECTING_
            </div>
          </div>
          <div className="animate-pulse absolute left-4 bottom-4 h-6 w-6 border-l-2 border-b-2 border-cyan-400/60"></div>
          <div className="animate-pulse absolute right-4 bottom-4 h-6 w-6 border-r-2 border-b-2 border-cyan-400/60"></div>
          {/* ........................................................................................ */}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-cyan-500/20 px-8 py-5">
      <div>
        <h1 className="orbitron text-2xl text-cyan-400">Developer Workspace</h1>
      </div>

      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          AVAILABLE
        </span>

        <span className="font-mono text-slate-400">{time}</span>
      </div>
    </header>
  );
}

export default Header;

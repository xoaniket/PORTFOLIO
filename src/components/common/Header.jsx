function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      <h1 className="orbitron text-2xl text-cyan-400">NEXUS</h1>

      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          ONLINE
        </span>

        <span className="text-slate-400">10:43 PM</span>
      </div>
    </header>
  );
}

export default Header;

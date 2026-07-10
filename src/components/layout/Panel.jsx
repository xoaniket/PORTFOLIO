import { forwardRef } from "react";
import Terminal from "../terminal/Terminal"; //lets a parent access a child through a ref

const Panel = forwardRef(function Panel({ sectionScroll }, ref) {
  return (
    <div className="flex flex-col h-100   bg-slate-950 border border-cyan-500/20 rounded-xl  shadow-2xl">
      <header className="flex py-4 pl-5 gap-16 border-b border-cyan-500/20  items-center">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
        </div>
        <h1 className="text-cyan-400 orbitron text-xl md:text-2xl">
          Mission Control
        </h1>
      </header>
      <div className="px-6 flex-1 overflow-hidden ">
        <Terminal sectionScroll={sectionScroll} ref={ref} />
      </div>
      a
    </div>
  );
});

export default Panel;

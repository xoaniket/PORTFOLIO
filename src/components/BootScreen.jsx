import React from "react";

function BootScreen({ onComplete }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className=" h-screen bg-slate-950 flex justify-center items-center">
      <div className="orbitron text-center">
        <h1 className="text-cyan-400 text-6xl font-bold">NEXUS</h1>
        <p className="text-slate-400 mt-3">
          {progress === 100 ? "ACCESS GRANTED" : "Initializing......"}
        </p>
        <div className="w-80 h-2 bg-slate-800 rounded-full mt-6 overflow-hidden ">
          <div
            className="h-full bg-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BootScreen;

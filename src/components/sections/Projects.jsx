import taskoraImg from "/images/taskora.png";
import AiChefClaude from "/images/AIChef.png";
import Tenzis from "/images/tenzis.png";
import Job from "/images/insidejob.png";
import { FaDice, FaSuitcase } from "react-icons/fa6";

import { IoIosCube, IoIosGlobe } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

import { PiChefHatFill } from "react-icons/pi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TASKORA",
      description:
        "A full-stack task management app with secure JWT authentication and REST APIs.",
      stack: ["React", "Tailwind CSS", "Django", "DRF"],
      github: "https://github.com/xoaniket/taskora",
      live: "https://taskora-xoxo.vercel.app",
      screenshot: taskoraImg,
      icon: IoIosCube,
    },
    {
      id: 2,
      title: "AI CHEF CLAUDE",
      description:
        "An AI-powered recipe generator that creates meals from the ingredients you have.",

      stack: ["React", "Tailwind CSS", "Claude API"],
      github: "YOUR_GITHUB_LINK",
      live: "https://xochefclaude.netlify.app/",
      screenshot: AiChefClaude,
      icon: PiChefHatFill,
    },
    {
      id: 3,
      title: "TENZIES",
      description:
        "A fast-paced React dice game built with hooks and state management.",

      stack: ["React", "JavaScript", "Tailwind CSS"],
      github: "YOUR_GITHUB_LINK",
      live: "https://xo-tenzis.netlify.app/",
      screenshot: Tenzis,
      icon: FaDice,
    },
    {
      id: 4,
      title: "INSIDE JOB",
      description:
        "A Django job portal for browsing listings and tracking applications.",

      stack: ["JavaScript", "Python", "CSS", "Django"],
      github: "YOUR_GITHUB_LINK",

      live: "https://insidejob.onrender.com",
      screenshot: Job,
      icon: FaSuitcase,
    },
  ];
  return (
    <section className="rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm p-5  lg:p-10">
      <header className="flex mb-6 -center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">PROJECTS</h1>

        <div className="flex -center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="  grid md:grid-cols-2 gap-6 bg-slate-950/50">
        {projects.map(
          ({
            id,
            live,
            github,
            stack,
            screenshot,
            title,
            description,
            icon: Icon,
          }) => {
            return (
              <div
                key={id}
                className="group rounded-xl text-white border border-cyan-500/40 p-6 lg:p-8
                transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={screenshot}
                    alt={title}
                    className="h-full w-full  rounded-lg transition-all duration-500 group-hover:scale-105  object-cover border border-cyan-500/20"
                  />
                </div>

                {/* TITLE & STATUS................... */}
                <div className="flex items-center justify-between ">
                  <h1
                    className="flex gap-2 items-center  orbitron text-2xl text-white tracking-wide mt-5 mb-2
                  transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    <Icon className="text-2xl" />
                    {title}
                  </h1>
                  <span className="animate-pulse rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs text-emerald-400">
                    ● LIVE
                  </span>
                </div>

                {/* DESCRIPTION............................... */}
                <div className="text-sm text-gray-500 mt-4">{description}</div>

                {/* STACK USED.............................................................................. */}
                <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="flex justify-center -center text-cyan-400 rounded-lg border w-full  py-2 border-cyan-500/40 transition-all duration-300 hover:-translate-y-1  hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* live links............................................ */}
                <div className="mt-6 flex gap-4">
                  <a
                    className="flex gap-2 rounded-md border border-emerald-500/30 px-4 py-2 text-emerald-400 hover:bg-emerald-500/10"
                    href={live}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosGlobe className="text-2xl" />
                    Live Demo ↗
                  </a>

                  <a
                    href={github}
                    target="blank"
                    rel="noopener noreferrer"
                    className="rounded-md flex gap-2 border border-cyan-500/30 px-4 py-2 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaGithubSquare className="text-2xl" />
                    GitHub ↗
                  </a>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

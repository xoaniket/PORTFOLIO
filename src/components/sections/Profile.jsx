import {
  BsBriefcase,
  BsCheckCircle,
  BsCodeSlash,
  BsPerson,
} from "react-icons/bs";
import { FiCpu } from "react-icons/fi";

import Corners from "../layout/corners";
import {
  FaBootstrap,
  FaFolderOpen,
  FaGithub,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { TbLockBolt } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";

function Profile() {
  const profileData = [
    {
      icon: BsPerson,
      label: "Name",
      value: "Aniket Chauhan",
    },
    {
      icon: BsBriefcase,
      label: "Education",
      value: "BCA Graduate",
    },
    {
      icon: BsCheckCircle,
      label: "Status",
      value: "Open to work",
      className: "text-emerald-500",
    },
    {
      icon: BsCodeSlash,
      label: "Focus",
      value: "React • Django • REST APIs",
    },
  ];

  const myStack = [
    { icon: FaReact, label: "React" },
    { icon: SiDjango, label: "Django" },
    { icon: FaPython, label: "Python", className: "text-amber-400" },
    { icon: DiJavascript1, label: "JavaScript" },
    { icon: RiTailwindCssFill, label: "Tailwind CSS" },
    { icon: FaBootstrap, label: "BootStrap", className: "text-violet-400" },
    { icon: GrMysql, label: "Mysql" },
    { icon: FaGithub, label: "Git & GitHub" },
  ];

  const highlights = [
    { title: "Projects", value: "8+", icon: FaFolderOpen },
    { title: "Technologies", value: "10+", icon: IoIosSettings },
    { title: "REST APIs", value: "JWT Auth", icon: TbLockBolt },
    { title: "Deployment", value: "Vercel + Render", icon: IoRocket },
  ];
  return (
    <section className="rounded-xl border border-cyan-500/20 backdrop-blur-sm shadow-2xl py-6 px-8 bg-slate-900/60">
      <header className="flex mb-6 items-center justify-between border-b border-cyan-500/20 pb-5">
        <h1 className="orbitron text-3xl text-cyan-400">DEVELOPER PROFILE</h1>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 "></span>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            ONLINE
          </span>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* PROFILE ................................................................................. */}
        <div
          className="
         lg:col-span-2 h-full relative px-5 py-2  items-center  
        border border-cyan-500/20 bg-slate-950/50
        transition-all duration-300 hover:border-cyan-400/50"
        >
          {/* PULSE CORNERS.......................... */}

          <Corners />

          <div className="space-y-5 ">
            <div className="flex  py-4 border-b border-cyan-500/30">
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
            {profileData.map(({ icon: Icon, label, value, className }) => (
              <div key={label} className="flex items-center  p-2">
                <Icon
                  className={`text-2xl mr-3 ${className ?? "text-cyan-400"}`}
                />
                <p className="text-xs w-24 md:w-50 uppercase tracking-wide text-slate-500">
                  {label}
                </p>

                <span className="mx-4 text-white">:</span>
                <p className={`font-mono mt-2 ${className ?? "text-cyan-300"}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CORE TECHNOLOGIES........................................................................................ */}
        <div className="relative h-full    rounded-xl border border-cyan-500/20 bg-slate-950/40 p-6">
          <Corners />

          <h4 className="flex items-center text-2xl uppercase gap-4 mb-4 orbitron text-cyan-400 tracking-tighter ">
            <FiCpu className="text-cyan-500 text-3xl" />
            Core Technologies
          </h4>

          <div className="grid grid-cols-2 gap-6 pt-6  ">
            {myStack.map(({ label, icon: Icon, className }) => {
              return (
                <span
                  key={label}
                  className="flex justify-center items-center w-full gap-1 text-cyan-300  rounded-md border border-cyan-500/60 hover:border-cyan-400 bg-slate-950  py-3 pc-3 text-sm
                 transition-all duration-300 hover:translate-y-1 hover:scale-105 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20 font-medium
                 "
                >
                  <Icon
                    className={`text-xl  ${className ?? "text-cyan-400"}`}
                  />
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* PROFESSIONAL SUMMARY.................................................................................. */}
      <div className="relative mt-6  rounded-xl border border-cyan-500/20 bg-slate-950/40 p-6 max-w-">
        <Corners />

        <div className="flex gap-4 mt-8">
          <div className="w-1 rounded-full bg-cyan-500"></div>

          <div className="space-y-5">
            <p className="text-cyan-400 text-2xl font-mono">
              &gt; INITIALIZING DEVELOPER PROFILE...
            </p>

            <p className="leading-7 text-slate-300">
              Full Stack Developer with experience building modern web
              applications using React, Django, and Django REST Framework.
              Skilled in developing responsive user interfaces, designing REST
              APIs, implementing JWT authentication, and working with PostgreSQL
              databases.
            </p>

            <div className="grid md:grid-cols-2 gap-2 text-cyan-300">
              <span>✓ Responsive UI Development</span>
              <span>✓ REST API Development</span>
              <span>✓ JWT Authentication</span>
              <span>✓ PostgreSQL Databases</span>
            </div>
          </div>
        </div>
      </div>

      {/* DEVELOPER HIGHLIGHTS................................................................ */}
      <div className="relative mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/40 p-6">
        <Corners />

        <h4 className="mb-6 orbitron text-xl tracking-wider text-cyan-400">
          DEVELOPER HIGHLIGHTS
        </h4>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ title, value, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-lg border border-cyan-500/20 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Icon className="text-3xl text-cyan-400 mb-3" />

              <h3 className="orbitron text-xs uppercase tracking-[0.2em] text-slate-400">
                {title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-cyan-400">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;

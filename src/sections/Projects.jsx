import { IoIosGlobe } from "react-icons/io";
import Tilt from "react-parallax-tilt";
import { FaGithubSquare } from "react-icons/fa";
import projects from "../Data/projectsData";
import { FaFolderPlus } from "react-icons/fa6";

export default function Projects() {
  return (
    <section className=" bg-slate-900/60 backdrop-blur-sm p-5  lg:p-10">
      <h2 className="orbitron text-center lg:text-left lg:ml-6 mb-4 text-4xl text-cyan-400">
        PROJECTS
      </h2>
      <div
        className="  grid md:grid-cols-3 gap-6 
       transition-all duration-300 "
      >
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
              <Tilt
                key={id}
                className="rounded-xl overflow-hidden shadow-2xl shadow-slate-950"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1500}
                transitionSpeed={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#22d3ee"
                glarePosition="all"
                scale={1.01}
              >
                <div
                  className="  group rounded-xl  text-white border border-cyan-500/20 bg-slate-900/60 p-6 
                transition-all duration-150   hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  <div className="aspect-video lg:h-40 lg:w-full overflow-hidden rounded-lg">
                    <img
                      src={screenshot}
                      alt={title}
                      className="h-full  w-full rounded-lg transition-all duration-500 group-hover:scale-105  object-cover border border-cyan-500/20"
                    />
                  </div>

                  {/* TITLE & STATUS................... */}

                  <div className="flex items-center justify-between ">
                    <h1
                      className="flex gap-2 items-center  orbitron text-2xl text-white tracking-tighter mt-5 mb-2
                  transition-colors duration-300 group-hover:text-cyan-300"
                    >
                      <Icon className="text-xl" />
                      {title}
                    </h1>
                    <span className="animate-pulse rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs text-emerald-400">
                      ● LIVE
                    </span>
                  </div>

                  {/* DESCRIPTION............................... */}
                  <div className="text-sm text-gray-500 mt-4">
                    {description}
                  </div>

                  {/* STACK USED.............................................................................. */}
                  <div className="mt-8 grid grid-cols-2  gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-target flex justify-center  text-cyan-400 rounded-lg w-full border   py-2 border-cyan-500/40 transition-all duration-300 hover:-translate-y-1
                          hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* live links............................................ */}
                  <div className=" mt-6 flex gap-4">
                    <a
                      className="cursor-target flex gap-2 rounded-md border border-emerald-500/30 px-3 py-1.5 text-sm text-emerald-400 hover:bg-emerald-500/10"
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
                      className="cursor-target rounded-md flex gap-2 border border-cyan-500/30 px-3 py-1.5 text-sm text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <FaGithubSquare className="text-2xl" />
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </Tilt>
            );
          },
        )}
        <div className="flex flex-col lg:col-span-2 items-center justify-center gap-3 py-16 text-center">
          <FaFolderPlus className="text-5xl text-cyan-400" />

          <h2 className="orbitron text-2xl text-white">
            More Projects Coming Soon
          </h2>

          <p className="max-w-md text-slate-400">
            I'm continuously building new applications and exploring modern
            technologies. Check back soon for future updates.
          </p>
        </div>
      </div>
    </section>
  );
}

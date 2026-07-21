import taskoraImg from "/images/taskora.png";
import AiChefClaude from "/images/AIChef.png";
import Tenzis from "/images/tenzis.png";
import Job from "/images/insidejob.png";

import { FaDice, FaSuitcase } from "react-icons/fa6";
import { IoIosCube } from "react-icons/io";
import { PiChefHatFill } from "react-icons/pi";



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
      title: "CHEF CLAUDE",
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

  export default projects;
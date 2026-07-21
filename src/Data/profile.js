import {
  BsBriefcase,
  BsCheckCircle,
  BsCodeSlash,
  BsPerson,
} from "react-icons/bs";

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


  export const profileData = [
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

  export const myStack = [
    { icon: FaReact, label: "React" },
    { icon: SiDjango, label: "Django" },
    { icon: FaPython, label: "Python", className: "text-amber-400" },
    { icon: DiJavascript1, label: "JavaScript" },
    { icon: RiTailwindCssFill, label: "Tailwind CSS" },
    { icon: FaBootstrap, label: "BootStrap", className: "text-violet-400" },
    { icon: GrMysql, label: "Mysql" },
    { icon: FaGithub, label: "Git & GitHub" },
  ];

  export const highlights = [
    { title: "Projects", value: "8+", icon: FaFolderOpen },
    { title: "Technologies", value: "10+", icon: IoIosSettings },
    { title: "REST APIs", value: "JWT Auth", icon: TbLockBolt },
    { title: "Deployment", value: "Vercel + Render", icon: IoRocket },
  ]


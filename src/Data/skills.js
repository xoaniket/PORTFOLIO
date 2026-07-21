import { FaTools } from "react-icons/fa";
import { FaCode, FaDatabase } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

const skills = [
    {
      category: "Frontend",
      icon: GrPersonalComputer,
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: IoSettings,
      technologies: [
        "Django",
        "Django REST Framework",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      category: "Languages",
      icon: FaCode,
      technologies: ["Python", "JavaScript", "C"],
    },
    {
      category: "Database",
      icon: FaDatabase,
      technologies: ["PostgreSQL", "SQLite", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      icon: FaTools,
      technologies: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
    },
  ];

  export default skills
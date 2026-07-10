import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaFileAlt, FaSatelliteDish } from "react-icons/fa";

export const missionData = [
  {
    id: 1,
    command: "profile",
    icon: IoIosPerson,
    title: "Personnel File",
    description: "Developer profile",
  },
  {
    id: 2,
    command: "projects",
    icon: PiRocketLaunchBold,
    title: "Mission Log",
    description: "Projects & achievements",
  },
  {
    id: 3,
    command: "skills",
    icon: BsFillLightningChargeFill,
    title: "System Status",
    description: "Skills & technologies",
  },
  {
    id: 6,
    command: "resume",
    icon: FaFileAlt,
    title: "Resume",
    description: "Download CV",
  },

  {
    id: 7,
    command: "journey",
    icon: FaFileAlt,
    title: "Journey",
    description: "what hapeemnning",
  },
  {
    id:5,
    command: "contact",
    icon: FaSatelliteDish,
    title: "Communication",
    description: "Get in touch",
  },
];
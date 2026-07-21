import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail} from "react-icons/fi";

const contacts = [
    {
      title: "Email",
      value: "fiftyaniket2000@gmail.com",
      href: "mailto:fiftyaniket2000@gmail.com",
      icon: FiMail,
    },
    {
      title: "GitHub",
      value: "github.com/xoaniket",
      href: "https://github.com/xoaniket",
      icon: BsGithub,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/",
      href: "https://www.linkedin.com/in/aniket-chauhan-1527041bb",
      icon: LiaLinkedin,
    },
    {
      title: "phone No.",
      value: "8851776070",
      icon: BiPhoneCall,
    },
  ];

  export default contacts
import React from "react";
import {
  FaInfoCircle,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReact,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Sidebar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-[68px] lg:w-56 md:w-44 h-full shadow-lg transition-transform duration-300 ease-in-out lg:rounded-l-2xl md:translate-x-0"
        aria-label="Sidebar"
        style={{
          clipPath:
            "polygon(0 0, 90% 0, 100% 0px, 100% 10px, 100% 150px, 95% 160px, 95% 300px, 100% 310px, 100% 100%, 0 100%)",
          backgroundColor: "rgb(44,44,44)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="h-full lg:rounded-xl border border-white/20 border-r-0 border-y-0 px-3 pt-4 overflow-y-auto font-oxanium">
          <ul className="space-y-1 font-medium mt-6 px-3">
            <li>
              <a
                href="#"
                onClick={() => handleScroll("about")}
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaInfoCircle className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScroll("skills")}
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaReact className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Skills
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScroll("projects")}
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaCode className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleScroll("experience")}
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <MdWork className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Experience
                </span>
              </a>
            </li>
            <li className="pb-3">
              <a
                href="#"
                onClick={() => handleScroll("contact")}
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaPhoneAlt className="text-2xl size-6" />
                <span className="ml-3  hidden md:inline hover:underline underline-offset-4">
                  Contact
                </span>
              </a>
            </li>

            <hr className="border-white/30" />
            <br />
            <span className="text-white/70 text-sm md:text-base font-medium hidden md:block">
              Social Link
            </span>
            <li>
              <a
                href="https://www.linkedin.com/in/uday-sathwara-a726b434a/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:flex items-center md:pt-4 md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaLinkedin className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/UdaySathwara"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaGithub className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  GitHub
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/unfav.uday/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaInstagram className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:sathwarauday24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <IoMail className="text-2xl size-6" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Email
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

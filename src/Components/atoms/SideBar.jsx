import React from "react";
import {
  FaInfoCircle,
  FaTerminal,
  FaCode,
  FaSchool,
  FaBriefcase,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCashRegister,
  FaReact,
  FaPhoneAlt,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineSchool, MdWork } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-16 lg:w-56 md:w-44 h-full shadow-lg transition-transform duration-300 ease-in-out rounded-xl md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full lg:rounded-2xl border border-white/20 border-r-0 border-y-0 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1 font-medium mt-6 px-3">
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaInfoCircle className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaReact className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Skills
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaCode className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <MdOutlineSchool className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Education
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <MdWork className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaPhoneAlt className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Contact
                </span>
              </a>
            </li>
            <hr className="hidden md:block" />
            <br />
            <span className="text-white/70 text-sm md:text-base font-medium hidden md:block">Social Link</span>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:pt-4 md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaLinkedin className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block"
              >
                <FaGithub className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  GitHub
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="sm:flex items-center md:p-3 py-3 text-white hover:text-purple-500 rounded-lg block">
                <FaInstagram className="text-2xl" />
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">
                  Instagram
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

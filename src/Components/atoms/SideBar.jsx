import React from "react";

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
          <ul className="space-y-6 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-4 text-white hover:text-purple-500 rounded-lg group"
              >
                <span className="material-symbols-outlined">home</span>
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-white hover:text-purple-500 rounded-lg group"
              >
                <span className="material-symbols-outlined">info</span>
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-white hover:text-purple-500 rounded-lg group"
              >
                <span className="material-symbols-outlined">code</span>
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-white hover:text-purple-500 rounded-lg group"
              >
                <span className="material-symbols-outlined">work</span>
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">Experience</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-white hover:text-purple-500 rounded-lg group"
              >
                <span className="material-symbols-outlined">call</span>
                <span className="ml-3 hidden md:inline hover:underline underline-offset-4">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

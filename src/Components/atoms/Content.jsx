import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";

function Content() {
  return (

    <div className="w-full flex flex-col items-strat justify-start text-left pt-16 md:pl-52 pl-20 px-2 lg:pl-64 gap-1 h-full overflow-y-scroll scrollbar-hide pb-4 hide-scrollbar">
      <span className="md:text-5xl text-3xl text-white/70 font-medium">
        Hello!
      </span>
      <span className="text-white/70 font-medium md:text-4xl lg:text-5xl text-3xl">
        I'm Uday Sathwara,
      </span>
      <span className="text-white/70 md:text-lg lg:text-xl text-base pt-4">
        A passionate Front-End Developer, who transforms design into code, and
        code into experience.
      </span>
      <span className="text-white/70 md:text-lg lg:text-xl text-base">
        Let's create something amazing together!
      </span>
      <button className="px-4 py-2 border border-white text-white bg-transparent hover:bg-purple-500/10 hover:text-purple-600 transition duration-300 rounded-tl-xl  rounded-lg w-40 mt-6 rounded-br-3xl ">
        Download CV
      </button>

      <Skills />
    </div>

  );
}

export default Content;

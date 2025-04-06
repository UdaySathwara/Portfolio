import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="w-full flex flex-col items-start justify-start text-left md:pl-52 pl-20 px-2 lg:pl-64 gap-1 h-full overflow-y-scroll scrollbar-hide pb-4 hide-scrollbar">

      {/* About Section */}
        <span className="md:text-5xl text-3xl text-white/70 font-medium lg:pt-16 pt-12 font-oxanium" id="about">
          Hello!
        </span>
        <span className="text-white/70 font-medium md:text-4xl lg:text-5xl text-3xl pt-2 font-oxanium">
          I'm Uday Sathwara,
        </span>
        <span className="text-white/70 md:text-lg lg:text-xl text-base pt-4 font-oxanium">
          A passionate Front-End Developer, who transforms design into code, and
          code into experience.
        </span>
        <span className="text-white/70 md:text-lg lg:text-xl text-base font-oxanium">
          Let's create something amazing together!
        </span>
        <button className="mt-4 rounded-md rounded-br-xl bg-transparent  text-white hover:bg-white/10 hover:text-white transition duration-300 px-4 py-2 w-44 font-oxanium font-medium backdrop-blur-md shadow-md">
        Download Resume
      </button>
        
      {/* Skills Section */}
      <section id="skills" className="">
        <Skills />
      </section>

      {/* Projects Section (you can replace with your Projects component) */}
      <section id="projects" className="">
       <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="">
        <Education />
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-32 text-white">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <p>Experience details will go here...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-32 text-white">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Contact details or a form goes here...</p>
      </section>

    </div>
  );
}

export default Content;

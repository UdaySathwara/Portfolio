import React from "react";
import TheLotusRoomImage from "../../assets/image.png";

const projects = [
  {
    title: "The Lotus Room",
    description:
      "It's Yoga Website that includes User Login with Firebase, Home, About, Contact Pages, Online Courses, Live Classes, Video Library, Progress Tracking that track your progress, and a Functional Shop with Cart, Product Details and Checkout Page.",
    tools: ["React", "Tailwind CSS", "Firebase"],
    image: TheLotusRoomImage,
    alt: "A variety of colorful smoothies in glasses",
    link: "https://thelotusroom.netlify.app/",
  },
  {
    title: "The Lotus Room",
    description:
      "It's Yoga Website that includes User Login with Firebase, Home, About, Contact Pages, Online Courses, Live Classes, Video Library, Progress Tracking that track your progress, and a Functional Shop with Cart, Product Details and Checkout Page.",
    tools: ["React", "Tailwind CSS", "Firebase"],
    image: TheLotusRoomImage,
    alt: "A variety of colorful smoothies in glasses",
    link: "https://thelotusroom.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-transparent text-gray-900 pr-4 pt-12 font-oxanium">
      <span className="text-white text-lg font-semibold md:text-xl flex flex-col items-start justify-center gap-2">
        Projects
        <span className="text-white text-sm font-medium font-sans">
          Turning Ideas Into Interactive Experiences
        </span>
      </span>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-300/10 p-3 rounded-lg shadow-lg hover:scale-[1.02] transition-transform text-white/70"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-4">{project.title}</h2>
            <p className="text-white text-sm mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-black/30 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center justify-center">
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-black/50 text-white py-2 px-5 rounded-full flex items-center hover:bg-black/40 hover:shadow-xl transition-colors relative gap-4 w-36"
            >
              <div className="text-lg">View Live</div>
              <div>
                <span className="absolute top-4 right-4 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

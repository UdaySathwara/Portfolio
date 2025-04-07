import React from "react";
import TheLotusRoomImage from "../../assets/image.png";

const projects = [
  {
    title: "The Lotus Room",
    description:
      "It's Yoga Website that includes User Login with Firebase, Home, About, Contact Pages, Courses, Live Classes, Video Library, Progress Tracking that track your progress, and a Functional Shop with Cart, Product Details and Checkout Page.",
    tools: ["React", "Tailwind CSS", "Firebase"],
    image: TheLotusRoomImage,
    alt: "A variety of colorful smoothies in glasses",
    link: "https://thelotusroom.netlify.app/",
  },
  {
    title: "The Lotus Room",
    description:
      "It's Yoga Website that includes User Login with Firebase, Home, About, Contact Pages, Courses, Live Classes, Video Library, Progress Tracking that track your progress, and a Functional Shop with Cart, Product Details and Checkout Page.",
    tools: ["React", "Tailwind CSS", "Firebase"],
    image: TheLotusRoomImage,
    alt: "A variety of colorful smoothies in glasses",
    link: "https://thelotusroom.netlify.app/",
  },
];

const CustomCard = ({ project }) => {
  return (
    <div
      className="w-[300px] bg-[rgb(44,44,44)] backdrop-blur-lg border border-black/20 transition-all duration-200 hover:shadow-[0_0_10px_rgb(255,255,255)] shadow-black/30 text-[rgb(211,211,211)] font-oxanium pb-4 h-full"
      style={{
        clipPath:
          "polygon(0 0, 200px 0, 210px 10px, 280px 10px, 290px 0, 100% 0, 100% 150px, 290px 160px, 290px 300px, 100% 310px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 400px, 10px 390px, 10px 100px, 0 90px)",
      }}
    >
      <div className="shadow-[0_0_12px_rgb(255,255,255)]">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-[200px] object-cover mb-[30px] hover:"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 )",
          }}
        />
      </div>
      <div className="mx-[30px]">
        <h2 className="text-left text-white text-2xl font-semibold">
          {project.title}
        </h2>
        <p className="mt-2 mb-2 tracking-widest text-[14px]">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="bg-white/20 text-white px-3 py-1.5 rounded-tr-md rounded-l-md rounded-br-xl text-xs font-medium flex items-center justify-center"
            >
              {tool}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-white/20 text-white py-2 px-5 rounded-l-md rounded-tr-lg rounded-br-2xl flex items-center hover:bg-white/30 hover:shadow-xl transition-colors relative gap-4 w-36 justify-center"
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
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-transparent text-gray-900 pr-4 pt-12 font-oxanium">
      <span className="text-white text-lg font-semibold md:text-xl flex flex-col items-start justify-center gap-2">
        Projects
        <span className="text-white text-sm font-medium font-sans">
          Turning Ideas Into Interactive Experiences
        </span>
      </span>
      <div className="w-full mx-auto grid gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 mt-4 py-4 pr-4 h-full">
        {projects.map((project, index) => (
          <CustomCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

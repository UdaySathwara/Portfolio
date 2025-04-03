import React from "react";

const skills = [
  {
    name: "HTML",
    logo: "https://img.icons8.com/?size=72&id=20909&format=png",
  },
  {
    name: "CSS",
    logo: "https://img.icons8.com/?size=72&id=21278&format=png",
  },
  {
    name: "JavaScript",
    logo: "https://img.icons8.com/?size=72&id=108784&format=png",
  },
  {
    name: "React",
    logo: "https://img.icons8.com/?size=72&id=bzf0DqjXFHIW&format=png",
  },
  {
    name: "Tailwind",
    logo: "https://img.icons8.com/?size=72&id=4PiNHtUJVbLs&format=png",
  },
  {
    name: "Git",
    logo: "https://img.icons8.com/?size=72&id=20906&format=png",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-center text-white md:pr-4">
      <div className="text-white text-lg font-semibold my-4 md:pt-4 xl:pt-10 pt-4 md:text-xl">
        My Skills
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 lg:gap-4 gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-black/20 rounded-lg justify-center flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-opacity-40"
          >
            <img alt={`${skill.name} logo`} className="px-3 py-1" src={skill.logo} />
            <span className="mb-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import Logo from "../../assets/LogoRCC.jpeg.png";

const ExperienceSection = () => {
    const experiences = [
        {
          company: "Radiant Code & Connect Pvt. Ltd.",
          position: "Junior Software Developer - Internship",
          duration: "Jan 2025 - April 2025",
          description:
            "Radiant Code & Connect, They deliver customized IT solutions, including software, cloud services, and cybersecurity, to help businesses grow and succeed.",
          logo: Logo,
          points: [
            "Built a responsive web application as a final year project using HTML, CSS, JavaScript, and React.js.",
            "Designed and implemented user-friendly interfaces with a focus on clean layout, usability, and mobile responsiveness.",
            "Used React components to manage different sections of the application.",
            "Applied Tailwind CSS for rapid UI development and consistent styling across the project.",
            "Practiced version control using Git and GitHub for collaboration and project management.",
            "Gained hands-on experience with real-world frontend development tools and workflows."
          ]
          
        },
      ];
      

  return (
    <div className="bg-transparent text-white py-12 font-oxanium w-full flex justify-center pr-4">
      <div className="w-full max-w-4xl">
        <span className="text-white text-lg font-semibold md:text-xl flex flex-col items-start gap-2">
          My Experience
          <span className="text-white text-sm font-medium font-sans">
            Where I Build Impactful Solutions
          </span>
        </span>

        <div className="flex flex-col items-start gap-4 mt-4 w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-sm flex flex-col w-full shadow-lg"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 10px, 68% 10px, 70% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)", backgroundColor: "rgb(44,44,44)", backdropFilter: "blur(10px)" }}

            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={exp.logo}
                  alt="Company Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="text-white text-lg font-bold">
                    {exp.company}
                  </h2>
                  <p className="text-indigo-400 text-sm font-semibold pb-1">{exp.position}</p>
                  <p className="text-gray-300 text-sm">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4">{exp.description}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

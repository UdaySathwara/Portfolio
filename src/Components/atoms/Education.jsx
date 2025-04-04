import React from "react";
import Schoolimg from "../../assets/school.png";

const EducationSection = () => {
  const educations = [
    {
      title: "B.Tech in Computer Engineering",
      institution: "Silver Oak University",
      duration: "Aug 2021 – May 2025",
      logo: "https://www.skill.college/_next/image?url=https%3A%2F%2Fskillcollege.blr1.digitaloceanspaces.com%2Fhub%2Flogo%2Fad519f3c-5a5f-40b0-9a7d-f68b44ce1d12%2Flogo_SOU_Logo.png&w=3840&q=75",
    },
    {
      title: "Higher Secondary School Certificate (HSC)",
      institution: "Shree Vidyanagar High School",
      duration: "July 2019 – June 2021",
      logo: Schoolimg,
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Shree Vidyanagar High School",
      duration: " July 2019",
      logo: Schoolimg,
    },
  ];

  return (
    <div className="bg-transparent text-gray-900 py-12 font-oxanium w-full flex justify-center pr-4">
      <div className="w-full">
        {/* Header */}
        <span className="text-white text-lg font-semibold md:text-xl flex flex-col items-start gap-2">
          My Educations
          <span className="text-white text-sm font-medium font-sans">
          Where I Gained My Foundation
          </span>
        </span>

        {/* Education Cards */}
        <div className="flex flex-col items-start gap-4 mt-4 w-full">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-black/20 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center w-full shadow-lg hover:scale-[1.02] transition-transform transform hover:bg-opacity-40 hover:bg-purple-500/30 hover:shadow-xl shadow-black/30"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full xl:w-[800px]">
                <img
                  alt="University logo"
                  className="w-14 h-14 sm:w-14 sm:h-14 mb-3 sm:mb-0 sm:mr-4 object-cover"
                  src={edu.logo}
                />
                <div className="flex flex-col text-left sm:text-left">
                  <h2 className="text-white text-base sm:text-lg font-bold">
                    {edu.title}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="text-white text-xs sm:text-sm mt-2 sm:mt-0 sm:text-right w-full sm:w-auto">
                {edu.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

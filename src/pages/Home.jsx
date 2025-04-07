import SideBar from "../Components/atoms/SideBar";
import Content from "../Components/atoms/Content";
import React from "react";

function About() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-black lg:p-12 p-0 md:p-4 md:py-16 "
      style={{
        backgroundColor: "#010101",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-white bg-opacity-10 backdrop-blur-lg md:m-8 lg:rounded-2xl border shadow-lg flex items-center justify-center border-white/20">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default About;
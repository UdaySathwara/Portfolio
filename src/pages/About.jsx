import Navbar from "../Components/atoms/Navbar";
import SideBar from "../Components/atoms/SideBar";
import Content from "../Components/atoms/Content";
import React from "react";

function About() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-black lg:p-12 p-0 md:p-4 md:py-16"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b2/fb/21/b2fb21f206c56acc2007ed7e587d9770.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-white bg-opacity-10 backdrop-blur-lg md:m-8 lg:rounded-2xl border border-white/20 shadow-lg flex items-center justify-center">
        <SideBar />
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default About;
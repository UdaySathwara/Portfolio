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
          "url(https://wallpapers.com/images/hd/starry-night-sky-dark-aesthetic-ro6a8cda8gg0zoil.jpg)",
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
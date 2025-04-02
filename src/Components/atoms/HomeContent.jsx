import React from "react";

function HomeContent() {
  return (
    <div className="w-full h-full flex flex-col items-strat justify-start text-left pt-16 md:pl-52 pl-20 px-2 lg:pl-64 gap-1">
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
    </div>
  );
}

export default HomeContent;

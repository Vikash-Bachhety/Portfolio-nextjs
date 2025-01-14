"use client"

import React from "react";
import "../components/component.css";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Projects from "./(pages)/projects/page";
import Contact from "./(pages)/contact/page";

function Home() {
  const handleDownload = () => {
    const fileUrl = "/Vikash_resume.pdf";
    const fileName = "vikash-bachhety-resume";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className={`relative w-full min-h-screen flex-col items-center justify-center px-4 md:px-8 py-16 md:py-20 z-10`}>
      <div className="absolute animateLeftBalls w-8 h-8 rounded-full -z-10 opacity-20 md:w-10 md:h-10"></div>
      <div className="absolute animateRightBalls w-8 h-8 rounded-full -z-10 opacity-20 md:w-10 md:h-10"></div>

      <div className="z-10 w-full h-[75vh] flex flex-col items-center justify-center mt-12 md:mt-20 text-center">
        <h2 className="drops text-3xl md:text-4xl lg:text-5xl  font-extrabold tracking-wider mb-8 md:mb-4">I'm Vikash Bachhety</h2>
        <h1 className="rightMove text-4xl md:text-5xl lg:text-7xl  font-extrabold tracking-widest mb-10 md:mb-6">Software Developer</h1>
        <p className="textMove text-md md:text-lg lg:text-xl  font-light mb-16 md:mb-12">
          Full Stack Developer | MERN Stack
        </p>
        <div className="flex flex-col items-center gap-6 md:gap-12 z-20">
          <button onClick={handleDownload} className="w-52 md:w-72 px-4 md:px-6 py-3 md:py-4 border duration-300  hover:bg-green-500 bg-rose-500 border-white rounded-lg text-lg md:text-xl lg:text-2xl text-white font-semibold mb-4 md:mb-0">Download CV</button>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
"use client"

import React from "react";
import profilePic from "../assets/profilePic.jpg"
import "../../../components/component.css";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <section className="flex-col justify-center items-center py-12 md:py-20 min-h-screen w-full">
      <h2 className="h-10 lg:h-12 text-2xl lg:text-4xl font-bold md:mb-5 text-center">
        About me
      </h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center md:tracking-wide md:leading-10 justify-center px-4 md:px-20 mt-12 md:mt-20">
        <div className="lg:w-1/2 px-4 md:px-8 md:-mt-6">
          <Image
            className="scale border-4 rounded-tl-3xl rounded-br-3xl border-blue-500 shadow-lg shadow-blue-300 w-full md:w-96 h-52 md:h-[500px] object-cover"
            src={profilePic}
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-center md:w-full lg:w-1/2 text-center lg:text-left p-4 md:p-5 leading-loose">
          <h2 className="drops text-3xl md:text-5xl lg:text-5xl font-bold mb-2 md:mb-4">
            Hi, I'm <span className="text-cyan-500">Vikash Bachhety</span>
          </h2>
          <p className="textMove text-base md:text-2xl lg:text-xl tracking-widest text-rose-600 mb-4 md:mb-10">
            Passionate Software Developer | Tech Enthusiast
          </p>
          <p className="text-base md:text-2xl lg:text-lg leading-loose">
            <b>Software Developer</b> <br />
            August 2024 - Present <br />
            i3 Infosoft Pvt. Ltd. <br /> <br />

            An accomplished software developer with a Master's in Computer Applications (MCA) completed with an 8.64 CGPA. Proficient in crafting scalable and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing and implementing efficient RESTful APIs to ensure seamless frontend-backend integration, enhancing data flow and overall application performance.

            With a strong foundation in full-stack development, I am driven to leverage cutting-edge technologies to deliver user-friendly and efficient software solutions. Passionate about continuously improving technical skills and contributing to dynamic, innovative projects that solve complex challenges.
          </p>
          <div className="mt-4 md:mt-12">
            <Link
              href="/contact"
              className="inline-block bg-cyan-700 text-white duration-500 py-2 md:py-3 px-4 md:px-6 rounded-full uppercase tracking-wider font-semibold hover:bg-rose-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
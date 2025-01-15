"use client";

import React from "react";
import profilePic from "../assets/profilePic.jpg";
import "../../../components/component.css";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <section className="flex flex-col justify-center items-center py-12 md:py-20 min-h-screen w-full mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 items-center justify-between px-6 md:px-20">
        {/* Profile Image Section */}
        <div className="lg:w-1/3 mb-5 lg:mb-0">
          <Image
            className="border-4 rounded-tl-3xl rounded-br-3xl border-blue-500 shadow-lg shadow-blue-300 w-full md:w-96 h-60 md:h-[500px] object-cover"
            src={profilePic}
            alt="Profile"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col lg:w-2/3 text-center lg:text-left">
          <h2 className="drops text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-500">Vikash Bachhety</span>
          </h2>
          <p className="text-lg md:text-xl text-rose-600 font-medium mb-6">
            Passionate Software Developer | Tech Enthusiast
          </p>

          {/* Introduction */}
          <p className="text-base md:text-md mb-6">
            I am a detail-oriented Full Stack Developer with a strong foundation in MERN stack technologies and hands-on
            experience in deploying scalable web applications. Proficient in collaborating with teams to achieve project goals,
            ensuring timely delivery of high-quality software. Passionate about driving innovation, mentoring peers, and
            leveraging the latest development practices to create impactful digital solutions.
          </p>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Experience</h3>
            <div className="text-base md:text-md leading-relaxed">
              <b>Software Developer</b> <br />
              <span className="text-cyan-500"><b>August 2024 - Present</b></span> <br />
              <span><b>i3 Infosoft Pvt. Ltd.</b></span>
              <ul className="list-disc pl-6 mt-2 text-md">
                <li>Developed and maintained full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to build scalable and high-performance web applications.</li>
                <li>Designed and implemented efficient RESTful APIs, ensuring seamless integration with frontend components to enhance data flow and overall application performance.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Education</h3>
            <p className="text-base md:text-lg leading-relaxed">
              <b>Master of Computer Applications</b> <br />
              <span className="text-cyan-500">Dev Bhoomi Uttarakhand University</span> <br />
              <span>Grade: 8.64 | July 2024</span>
            </p>
          </div>

          {/* Call-to-Action */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-cyan-700 text-white py-3 px-6 rounded-full uppercase tracking-wider font-semibold hover:bg-rose-500 transition duration-300"
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

"use client"

import React, { useState } from "react";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import node from "../assets/logos/node.png";
import mongoose from "../assets/logos/mongoose.png";
import express from "../assets/logos/Express.png";
import nextjs from "../assets/logos/Next.png";
import Image from "next/image";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: html,
      color: "#E44D26",
      detail:
        "HTML is the standard markup language for creating web pages and web applications.",
      knowledge: "85%",
    },
    {
      name: "CSS",
      image: css,
      color: "#264DE4",
      detail:
        "CSS is the language used for styling web pages and web applications.",
      knowledge: "80%",
    },
    {
      name: "JavaScript",
      image: javascript,
      color: "#F0DB4F",
      detail:
        "JavaScript is the programming language used to make web pages interactive.",
      knowledge: "85%",
    },
    {
      name: "React.js",
      image: react,
      color: "#61DAFB",
      detail: "React is a JavaScript library for building user interfaces.",
      knowledge: "80%",
    },
    {
      name: "Node.js",
      image: node,
      color: "#68A063",
      detail:
        "Node.js is a JavaScript runtime for building scalable network applications.",
      knowledge: "60%",
    },
    {
      name: "Express.js",
      image: express,
      color: "#68A063",
      detail:
        "A minimalist Node.js web application framework for building robust APIs and server-side applications.",
      knowledge: "85%",
    },
    {
      name: "Mongoose",
      image: mongoose,
      color: "#47A248",
      detail:
        "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
      knowledge: "65%",
    },
    {
      name: "Next.js",
      image: nextjs,
      color: "#47A248",
      detail:
        "A React-based framework for building server-rendered and static web applications.",
      knowledge: "50%",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSkills = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 4, skills.length - 4));
  };

  const prevSkills = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 overflow-hidden pb-10">
      <h1 className="drops font-extrabold tracking-widest text-3xl md:text-4xl mt-32 md:mt-32 mb-4">
        My Skills
      </h1>
      <p className="textMove font-medium tracking-wider text-base md:text-lg text-center px-4 mb-6 max-w-2xl">
        Welcome to the Skills section, where I showcase the diverse range of
        tools and technologies I work with. Explore the cards below to learn
        more about my expertise.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10 w-full px-2 md:px-6">
        {skills.slice(startIndex, startIndex + 4).map((skill, index) => (
          <SkillCard key={startIndex + index} skill={skill} />
        ))}
      </div>
      <div className="flex mt-10 justify-between gap-6">
        <button
          className={`ml-auto p-3 rounded-full ${startIndex === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-400"
            } focus:outline-none`}
          onClick={prevSkills}
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <button
          className={`mr-auto p-3 rounded-full ${startIndex >= skills.length - 4
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-400"
            } focus:outline-none`}
          onClick={nextSkills}
          disabled={startIndex >= skills.length - 4}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const { name, image, detail, knowledge } = skill;

  return (
    <div className="relative scale w-64 h-52 border border-current md:h-72 mb-10 opacity-90 hover:opacity-100 hover:scale-105 duration-500 bg-bg rounded-xl shadow-lg flex flex-col items-center justify-center p-2">
      <div className="w-full h-full items-center bg-sky-50 flex justify-center">
        <Image
          src={image}
          alt={name}
          className="w-20 h-20 md:w-28 md:h-28 object-contain mb-4"
        />
      </div>
      <p className="text-center tracking-wider text-md md:text-lg">
        {name}
      </p>
      <p className="text-center tracking-wider text-md md:text-sm">
        {detail}
      </p>
      <div className="flex gap-2 items-center justify-between absolute -bottom-8 w-full h-2 md:h-4 rounded-r-lg pr-2">
        <p style={{ width: `${knowledge}` }} className="textBg h-full rounded-r-full"></p>
        <p className="textZoom font-thin">{knowledge}</p>
      </div>
    </div>
  );
}

export default Skills;
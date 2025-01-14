"use client"

import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import lightLogo from "../app/(pages)/assets/logos/day.png";
import darkLogo from "../app/(pages)/assets/logos/night.png";
import Image from "next/image";

function UseTheme() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const bg = theme === "light" ? "linear-gradient(90deg, rgba(173,202,255,1) 0%, rgba(203,203,255,1) 47%, rgba(198,246,255,1) 100%)" : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,5,69,1) 35%, rgba(0,48,57,1) 100%)";
  const text = theme === "light" ? "black" : "white";

  useEffect(() => {
    document.body.style.backgroundImage = bg;
    document.body.style.color = text;
  }, [theme]);

  return (
    <div>
      <Image className="h-10 w-10"
        src={theme === "light" ? lightLogo : darkLogo}
        alt={theme === "light" ? "Light Mode" : "Dark Mode"}
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default UseTheme;


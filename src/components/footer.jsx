"use client"

import React from "react";
import linkedin from "../app/(pages)/assets/logos/linkedin.png";
import github from "../app/(pages)/assets/logos/github.png";
import gmail from "../app/(pages)/assets/logos/gmail.png";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-slate-900/90 text-white py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:px-0">
        <div className="text-center mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-6 hover:border-b-2 h-10 tracking-wider">Follow Me</h3>
          <div className="drops flex justify-center gap-x-10">
            <Link href="https://www.linkedin.com/in/vikash-bachhety/" className="text-white hover:text-gray-300 hover:scale-110"><Image src={linkedin} alt="LinkedIn" className="w-10 h-10" /></Link>
            <Link href="https://github.com/Vikash-Bachhety" className="text-white hover:text-gray-300 hover:scale-110"><Image src={github} alt="GitHub" className="w-10 h-10" /></Link>
            <Link href="https://bachhetyv@gmail.com" className="text-white hover:text-gray-300 hover:scale-110"><Image src={gmail} alt="Gmail" className="w-10 h-10" /></Link>
          </div>
        </div>
        <div className="md:flex md:flex-row justify-center gap-x-96 w-full">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-2">Email: bachhetyv@gmail.com</p>
          {/* <p className="mb-2">Phone: +91xxxxxxxxxx</p> */}
          <p>Address: Dehra Dun, IND</p>
        </div>
        <div className="flex flex-col mt-10 md:mt-0 items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="pl-4 list-none">
            <li className="hover:text-blue-300 hover:text-lg"><Link href="/About">About Me</Link></li>
            <li className="hover:text-blue-300 hover:text-lg"><Link href="/Skills">Skills</Link></li>
            <li className="hover:text-blue-300 hover:text-lg"><Link href="/Projects">Projects</Link></li>
            <li className="hover:text-blue-300 hover:text-lg"><Link href="/Contact">Connect</Link></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="w-11/12 flex justify-center mx-auto mt-8 tracking-widest leading-6 text-xs">
        <p className="text-center">&copy; 2024 vikash. All rights reserved. | Privacy Policy | Terms of Service | Disclaimer</p>
      </div>
    </footer>
  );
}

export default Footer;

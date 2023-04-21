import Link from "next/link";
import React from "react";

import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin, GrMail } from "react-icons/gr";

// 5d00ff
// fc4007

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi 👋 ich bin<span className="text-[#5651e5]"> Milad</span>
          </h1>
          <h1 className="py-2 text-gray-700">ein Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Ich entwickle Front-End-Webanwendungen mit React und integriere sie
            in Back-End-Technologien.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/milad-miyakheel/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrLinkedin size={20} />
              </div>
            </a>
            <a
              href="https://github.com/MiladMKL"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={20} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrMail size={20} />
              </div>
            </Link>
            <a target="_blank" rel="noreferrer" href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonVcardFill size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

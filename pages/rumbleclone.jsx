import Image from "next/image";
import React from "react";
import rumbleImg from "../public/assets/projects/rumble-clone.png";
import { AiFillApi } from "react-icons/ai";
import Link from "next/link";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiReact,
} from "react-icons/si";

// 5d00ff
// fc4007

const rumbleclone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={rumbleImg}
          alt="/"
          loading="lazy"
        />
        <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-center md:text-left">Rumble Klon</h2>
          <div className="flex flex-col md:flex-row items-center gap-2 text-lg md:text-xl">
            <SiJavascript />
            <span>Javascript</span>
            <span>+</span>
            <SiReact />
            <span>React</span>
            <span>+</span>
            <SiTailwindcss />
            <span>Tailwind</span>
            <span>+</span>
            <AiFillApi />
            <span>Rapid API</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5d00ff] mb-4">
            Projekt
          </p>
          <h2 className="mb-4">Über das Projekt</h2>
          <p>
            Ein einfaches Rumble-Klon-Projekt, das mit React, Tailwind CSS und
            RapidAPI entwickelt wurde und eine funktionale Nachbildung der
            beliebten Rumble-Videoplattform bietet. Mit diesem Klon kann man
            Videos ansehen, nach Videos suchen und auf Benutzerkanäle zugreifen,
            alles in einer benutzerfreundlichen und responsiven Oberfläche. Für
            die Videoinhalte habe ich die Youtube-API von RapidAPI verwendet, da
            es keine öffentliche API für den Zugriff auf Rumble-Videos gibt.
            Obwohl die Videos von Youtube stammen, reproduziert die App
            erfolgreich das Design und die Funktionen der Rumble-Videoplattform
            und bietet den Benutzern eine vertraute und nahtlose Erfahrung.
          </p>

          <a
            href="https://github.com/MiladMKL/rumble_clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 mt-8 mr-8">Github</button>
          </a>

          <a
            href="https://videoplatform.miladmiyakheel.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 mt-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-4">
            <p className="text-center font-bold pb-2">Technologien</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <SiReact size={25} className="pr-2" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiTailwindcss size={25} className="pr-2" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiJavascript size={25} className="pr-2" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiFillApi size={25} className="pr-2" /> Rapid API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer mt-2">Zurück</p>
        </Link>
      </div>
    </div>
  );
};

export default rumbleclone;

import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/netflix-clone.png";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import Link from "next/link";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiStrapi,
  SiRedux,
} from "react-icons/si";

const netflixclone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={netflixImg}
          alt="/"
          loading="lazy"
        />
        <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-center md:text-left">Netflix Klon</h2>
          <div className="flex flex-col md:flex-row items-center gap-2 text-lg md:text-xl">
            <SiJavascript />
            <span>Javascript</span>
            <span>+</span>
            <SiNextdotjs />
            <span>Next JS</span>
            <span>+</span>
            <SiTailwindcss />
            <span>Tailwind</span>
            <span>+</span>
            <BsFillShieldLockFill />
            <span>NextAuth</span>
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
            Ein Netflix-Klon-Projekt, erstellt mit Next.js, Tailwind CSS und
            NextAuth. Das Projekt bezieht Daten zu Filmen und Fernsehsendungen
            von der Movie Database (TMDB). Die App verfügt über ein schlankes
            Design, das dem Streaming-Dienst von Netflix ähnelt und es den
            Nutzern ermöglicht, beliebte Filme und Fernsehsendungen zu
            durchstöbern und die entsprechenden Trailer anzusehen.
          </p>
          <br />
          <p>
            <strong>Hinweis: </strong>
            Obwohl die App über eine funktionale Authentifizierungsfunktion mit
            NextAuth verfügt, wurde diese zu Demonstrationszwecken deaktiviert.
          </p>

          <a
            href="https://github.com/MiladMKL/netflix-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 mt-8 mr-8">Github</button>
          </a>

          <a
            href="https://streamingwebsite.miladmiyakheel.com/"
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
                <SiNextdotjs size={25} className="pr-2" /> Next.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiTailwindcss size={25} className="pr-2" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiJavascript size={25} className="pr-2" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillShieldLockFill size={25} className="pr-2" /> Next Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaDatabase size={25} className="pr-2" /> TMDB API
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

export default netflixclone;

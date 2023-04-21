import Image from "next/image";
import React from "react";
import pokedexImg from "../public/assets/projects/pokedex.png";
import { MdCatchingPokemon } from "react-icons/md";
import Link from "next/link";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPokemon,
} from "react-icons/si";

const pokedex = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pokedexImg}
          alt="/"
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
            <MdCatchingPokemon />
            <span>PokeApi</span>
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
            Das Pokémon Pokedex Projekt ist eine mit NextJS entwickelte
            Anwendung, die Zugang zu Informationen über alle 898 Pokémon bietet.
            Ich habe diese Anwendung entwickelt, um meine Kenntnisse in Next.js
            und Tailwind CSS zu vertiefen. Die Anwendung enthält detaillierte
            Daten über jedes Pokémon, einschließlich seiner Typen, Größe,
            Gewicht und Spezialfähigkeiten. Sie zeigt auch die Bilder der
            Pokémon an, die von der PokeAPI abgerufen werden. Auf diese Weise
            erhalten die Nutzer der App einen umfassenden Einblick in die
            vielfältige Welt der Pokémon.
          </p>
          <a
            href="https://github.com/MiladMKL/pokedex-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-4 mt-8 mr-8">Github</button>
          </a>

          <a
            href="http://chinpokedex.miladmiyakheel.com/"
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
                <MdCatchingPokemon size={25} className="pr-2" /> Pokeapi
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

export default pokedex;

import React from "react";

import rumbleImg from "../public/assets/projects/rumble-clone.png";
import pokedexImg from "../public/assets/projects/pokedex.png";
import netflixImg from "../public/assets/projects/netflix-clone.png";
import watchStoreImg from "../public/assets/projects/watchstore.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest font-semibold uppercase text-[#5651e5]">
          Projekte
        </p>
        <h2 className="py-4">Meine Projekte:</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Rumble Klon"
            backgroundImg={rumbleImg}
            projectUrl="/rumbleclone"
            tech="React + Tailwindcss + RapidAPI"
          />
          <ProjectItem
            title="Watch Store"
            backgroundImg={watchStoreImg}
            projectUrl="/watchstore"
            tech="NextJS + Tailwindcss + Redux + Strapi"
          />
          <ProjectItem
            title="Netflix Klon"
            backgroundImg={netflixImg}
            projectUrl="/netflixclone"
            tech="NextJS + Tailwindcss + NextAuth"
          />

          <ProjectItem
            title="Pokedex App"
            backgroundImg={pokedexImg}
            projectUrl="/pokedex"
            tech="NextJS + Tailwindcss + PokeApi"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import AboutImg from "../public/assets/about.jpg";
import AboutImg from "../public/assets/my-image.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-semibold tracking-widest text-[#5651e5]">
            Über mich
          </p>
          <h2 className="py-4">Wer bin ich?</h2>
          <p className="py-2 text-gray-600">
            Als Full-Stack-Entwickler verfüge ich über weitreichende Kenntnisse
            im Bereich der Webanwendungsentwicklung. Meine besondere Expertise
            liegt in der Front-End-Entwicklung, wobei ich regelmäßig mit der
            React-JavaScript-Bibliothek arbeite. Zusätzlich bringe ich
            Erfahrungen im Umgang mit serverseitigen Technologien wie Node.js
            sowie traditionellen und NoSQL-Datenbanken, wie MongoDB, mit.
          </p>
          <p className="py-2 text-gray-600">
            Ich bin spezialisiert auf das Erstellen von UI-Komponenten und das
            Managen von Benutzerinteraktionen und Zuständen mit React. Des
            Weiteren beherrsche ich das Entwickeln von Backend-APIs und deren
            Integration ins Frontend mittels Technologien wie REST oder GraphQL.
            Meine Fertigkeiten in Frontend- und Backend-Technologien machen mich
            zu einer wertvollen Bereicherung für jedes Webentwicklungsteam. Dank
            meiner umfassenden Kenntnisse über den gesamten Stack kann ich
            performante, skalierbare und robuste Anwendungen entwickeln.
          </p>
          <p className="py-2 text-gray-600">
            Neben meiner Expertise als Webentwickler bringe ich auch Erfahrung
            im Bereich Java EE mit. Im Laufe meiner bisherigen beruflichen
            Laufbahn hatte ich die Gelegenheit, als Java Backend Developer tätig
            zu sein und mein Know-how in der Implementierung von
            Backend-Lösungen auf Basis von Java zu vertiefen. Obwohl ich mit den
            gängigen Frameworks und Technologien des Java-Ökosystems vertraut
            bin, liegt mein Fokus mittlerweile hauptsächlich auf JavaScript,
            React und NextJS. Ich bemühe mich stets, mein Wissen auf dem
            neuesten Stand zu halten und aktuellen Trends und Entwicklungen in
            den JavaScript-Frameworks zu folgen. Mit meiner Kompetenz in beiden
            Bereichen kann ich sowohl im Frontend- als auch im Backend-Bereich
            erfolgreich an Projekten teilnehmen und für eine nahtlose
            Integration sorgen.
          </p>
          <Link href="/#projects">
            <p className="pt-4 text-gray-600 underline cursor-pointer">
              Meine Projekte:
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const skills = [
    {
      name: "Laravel",
      path: "/laravel.svg",
    },
    {
      name: "Vue",
      path: "/vue.svg",
    },
    {
      name: "React",
      path: "/react.svg",
    },
    {
      name: "oracle",
      path: "/oracle.svg",
    },
    {
      name: "php",
      path: "/php.svg",
    },
    {
      name: "js",
      path: "/js.svg",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-slate-100 lg:items-center overflow-auto">
      <div className="w-full h-16 bg-gradient-to-r  from-slate-800 to-indigo-950  flex flex-row justify-between items-center px-4 py-1 tracking-wide shadow-md shadow-slate-800">
        <div className="font-bold tracking-wide">/LUCASSMSILVA</div>
        <div className="w-4 text-slate-200">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="w-full flex flex-col flex-1 px-2">
        <div className="h-screen w-full flex flex-col bg-gradient-to-b from-slate-900 to-indigo-900 lg:justify-center justify-end pb-4 ">
          <div className="flex flex-col items-center mt-6">
            <Image
              className="rounded-full mt-6 shadow-lg shadow-sky-600 "
              alt="Profile Picture"
              src="/profile.jpg"
              width={240}
              height={240}
            ></Image>
            <div className="text-center text-transparent text-2xl font-bold mt-4  bg-clip-text bg-gradient-to-r from-slate-300 to-purple-500">
              ❝ Simplicity is the ultimate sophistication ❞
            </div>
            <small>(Leonardo Da Vinci)</small>
            <p className="p-2 mt-6 text-center w-full md:w-1/2">
              Experienced developer with skills in Laravel, Vue3, and React,
              with a passion for creating simple and efficient solutions. I am
              seeking opportunities to grow personally and contribute to
              challenging projects while working as part of a team. I have
              experience in ORACLE PL/SQL queries for custom reports and
              filters.
            </p>
          </div>

          <div className="mt-6 flex md:justify-center space-y-2 px-2">
            <div className="w-full flex flex-row md:w-[1060px] space-x-2 overflow-auto md:justify-center">
              {skills.map((skill) => (
                <div className="flex flex-col" key={skill.name}>
                  <div className="w-[120px] h-[120px] rounded-lg shadow-md bg-gradient-to-r from-slate-600 to-slate-800 flex flex-col items-center justify-center">
                    <Image
                      alt={skill.name}
                      src={skill.path}
                      width={80}
                      height={80}
                    ></Image>
                  </div>
                  <span className="text-white font-medium text-center capitalize">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col  bg-wave bg-left text-2xl px-2 py-6 lg:items-center justify-end">
          <div className="w-full flex flex-col lg:w-1/2 mb-4">
            <span className="text-3xl font-semibold">CONTATO</span>
            <div className="w-full space-y-2 mt-6">
              <div className="w-full flex flex-row items-center space-x-2">
                <FontAwesomeIcon className="w-8 lg:w-12" icon={faUser} />
                <span>Lucas dos Santos Marques da Silva</span>
              </div>
              <div className="w-full flex flex-row items-center space-x-2">
                <FontAwesomeIcon className="w-8 lg:w-12" icon={faEnvelope} />
                <span>luca.stos@hotmail.com</span>
              </div>
              <div className="w-full flex flex-row items-center space-x-2">
                <FontAwesomeIcon className="w-8 lg:w-12" icon={faWhatsapp} />
                <span>(65) 98469-9962</span>
              </div>
              <div className="w-full flex flex-row items-center space-x-2">
                <FontAwesomeIcon className="w-8 lg:w-12" icon={faLinkedin} />
                <span>/lucassmsilva</span>
              </div>
            </div>

            <div className="w-full flex flex-row justify-between mt-4 mb-2 text-slate-900 lg:max-w-[500px] space-x-4 overflow-hidden">
              <a
                href="https://api.whatsapp.com/send?phone=5565984699962"
                target="__blank"
                className="shadow-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon className="w-10 lg:w-16" icon={faWhatsapp} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucassmsilva/"
                target="__blank"
                className="shadow-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon className="w-10 lg:w-16" icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/lucassmsilva"
                target="__blank"
                className="shadow-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon className="w-10 lg:w-16" icon={faGithub} />
              </a>
              <a
                href="mailto:luca.stos@hotmail.com"
                target="__blank"
                className="shadow-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon className="w-10 lg:w-16" icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

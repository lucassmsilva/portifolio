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
  const Card = ({ title, children }) => {
    return (
      <div className="flex flex-col  mt-4 bg-slate-800 shadow-md px-2 py-1 rounded-md">
        <div className="w-full tracking-wide mb-4 py-2 font-bold shadow-md">
          <span className="py-2 text-xl font-semibold tracking-wide">
            {title}
          </span>
        </div>

        <div className="w-full ">{children}</div>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-slate-100 lg:items-center">
      <div className="w-full h-16 bg-gradient-to-r  from-slate-800 to-indigo-950  flex flex-row justify-between items-center px-4 py-1 tracking-wide shadow-md shadow-slate-800">
        <div className="font-bold tracking-wide">/LUCASSMSILVA</div>
        <div className="w-4 text-slate-200">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="w-full flex flex-col flex-1 px-2 lg:w-2/3">
        <Card title="CONTACT">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full flex flex-col">
              <div className="w-[160px] h-[160px] rounded-full bg-slate-500 mb-4">
                <Image
                  className="rounded-full"
                  alt="Profile Picture"
                  src="/profile.jpg"
                  width={160}
                  height={160}
                ></Image>
              </div>
              <div className="w-full text-lg font-semibold tracking-wider my-2">
                FULLSTACK DEVELOPER
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full space-y-1">
                <div className="w-full flex flex-row space-x-2">
                  <FontAwesomeIcon className="w-4" icon={faUser} />
                  <span>Lucas dos Santos Marques da Silva</span>
                </div>
                <div className="w-full flex flex-row space-x-2">
                  <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                  <span>luca.stos@hotmail.com</span>
                </div>
                <div className="w-full flex flex-row space-x-2">
                  <FontAwesomeIcon className="w-4" icon={faWhatsapp} />
                  <span>(65) 98469-9962</span>
                </div>
                <div className="w-full flex flex-row space-x-2">
                  <FontAwesomeIcon className="w-4" icon={faLinkedin} />
                  <span>/lucassmsilva</span>
                </div>
              </div>

              <div className="w-full flex flex-row justify-between mt-4 mb-2 text-slate-900 lg:max-w-[300px]">
                <a
                  href="mailto:luca.stos@hotmail.com"
                  target="__blank"
                  className="bg-slate-400 px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <FontAwesomeIcon className="w-8" icon={faEnvelope} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucassmsilva/"
                  target="__blank"
                  className="bg-slate-400 px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <FontAwesomeIcon className="w-8" icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/lucassmsilva"
                  target="__blank"
                  className="bg-slate-400 px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <FontAwesomeIcon className="w-8" icon={faGithub} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=556598469962"
                  target="__blank"
                  className="bg-slate-400 px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <FontAwesomeIcon className="w-8" icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card title="RESUME">
          <p className="p-2">
            Experienced developer with skills in Laravel, Vue3, and React, with
            a passion for creating simple and efficient solutions. I am seeking
            opportunities to grow personally and contribute to challenging
            projects while working as part of a team. I have experience in
            ORACLE PL/SQL queries for custom reports and filters.
          </p>
        </Card>
      </div>
    </main>
  );
}

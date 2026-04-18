"use client";

import Starfield from "./components/Background";
import { FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { useParallax } from "./components/hooks/useParralax";
export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  useParallax(cardRef);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans relative overflow-hidden">
      <Starfield />

      <main
        ref={cardRef}
        className="flex w-full max-w-3xl flex-col items-center justify-between py-16 px-6 sm:px-11.5 
                   bg-mist-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl 
                   transition-transform duration-400 ease-out"
      >
        <div className="relative w-full flex flex-col items-center -mt-8 mb-10">
          <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
            <img
              src="https://cdn.discordapp.com/banners/1004487778630914182/a_36fad5971cf5f25e790492d4739d0f16.gif?size=1024"
              alt="Discord Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-transparent" />
          </div>

          <div className="relative -mt-16 mb-4">
            <div className="relative w-40 h-40">
              <img
                src="https://cdn.discordapp.com/avatars/1004487778630914182/18e653cca00d936c403f95d6c9814ac6.png?size=512"
                alt="int_ma1n"
                className="w-full h-full rounded-full border-4 border-zinc-950 object-cover shadow-2xl"
              />
              <img
                src="https://cdn.discordapp.com/avatar-decoration-presets/a_a0ff7f9be49be57356dd3cf0d9c02605.png?size=512&passthrough=true"
                alt="Avatar Decoration"
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
              int_ma1n
            </h2>
            <p className="text-zinc-400 mt-1">@int_ma1n • Discord</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left w-full">
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full justify-center">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 px-5 transition-all hover:border-emerald-500 hover:bg-emerald-500/10 md:w-auto"
              href="https://t.me/int_ma1n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="mr-2 w-5 h-5" />
              Telegram
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 px-5 transition-all hover:border-red-500 hover:bg-red-500/10 md:w-auto"
              href="https://www.youtube.com/@int_ma1n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="mr-2 w-5 h-5" />
              YouTube
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 px-5 transition-all hover:border-zinc-400 hover:bg-zinc-400/10 md:w-auto"
              href="https://github.com/int-ma1n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

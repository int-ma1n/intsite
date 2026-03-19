import Starfield from "./components/Background";
import { FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Starfield />
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-11.5 bg-mist-900 sm:items-start rounded-2xl">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Может тут что-то да будет..
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Мои соц сети:{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#2ca4c248] md:w-39.5 mt-3"
            href="https://t.me/int_ma1n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="mr-1 w-5 h-5"></FaTelegram>
            Telegram
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#ff000048] md:w-39.5 mt-3"
            href="https://www.youtube.com/@int_ma1n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="mr-1 w-5 h-5"></FaYoutube>YouTube
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#53535348] md:w-39.5 mt-3"
            href="https://github.com/int-ma1n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-1 w-5 h-5"></FaGithub>GitHub
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#46020248] md:w-39.5 mt-3"
            href="net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdDangerous className="mr-1 w-5 h-5"></MdDangerous>НЕ ЖМИ
          </a>
        </div>
      </main>
    </div>
  );
}

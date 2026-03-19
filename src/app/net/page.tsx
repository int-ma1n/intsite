import Starfield from "../components/Background";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Starfield />
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-11.5 bg-mist-900 rounded-2xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Зачем ты сюда зашёл? Я же просил не заходить..
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Своим поступком ты предал меня, я не знаю как ты мог пойти на такой
            поступок...
          </p>
        </div>
      </main>
    </div>
  );
}

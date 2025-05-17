import type { Route } from "./+types/home";
import { GlobeLock, Scale } from "lucide-react";
import { useMemo } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BlazeChat - Coming Soon" },
    {
      name: "description",
      content: "BlazeChat coming soon to your retail store",
    },
    { property: "og:title", content: "BlazeChat - Coming Soon" },
    { property: "og:image", content: "https://blazechat.se/thumb.png" },
  ];
}

const GitHub = ({ className }: { className: string }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const copyright = useMemo(
    () => `2025${year > 2025 ? "-" + year : ""}`,
    [year]
  );

  return (
    <main className="h-screen w-screen bg-slate-950 flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-row relative items-center">
        <p className="bg-clip-text text-transparent font-black z-10 text-8xl bg-gradient-to-b from-[#e7792a] to-[#f07086]">
          Blaze
        </p>
        <span className="text-white text-8xl font-black z-10">Chat</span>
        <p className="p-1 px-2 rounded-lg text-xs animate-bounce text-green-500 border border-green-500 bg-green-500/10 absolute -right-15 -top-2 backdrop-blur-2xl">
          Alpha
        </p>
        <span className="bg-clip-text w-full text-transparent bg-gradient-to-b from-orange-400 to-pink-400 text-8xl font-black blur-2xl absolute left-0 right-0 top-0 animate-pulse bottom-0 z-0">
          ChatBlaze
        </span>

        <span className="bg-clip-text w-full text-transparent bg-gradient-to-b from-orange-400 to-pink-400 text-8xl font-black blur-2xl absolute left-0 right-0 top-0 animate-ping bottom-0 z-0">
          ChatBlaze
        </span>
      </div>
      <p className="text-xl text-white font-bold">Coming soon</p>
      <nav className=" p-2 border border-slate-600 gap-2 rounded shadow-lg z-10 mt-10 flex flex-row items-center justify-center">
        <a
          target="_blank"
          href="https://blazechat.se/legal/privacy"
          className="text-slate-200 flex items-center gap-2 hover:bg-slate-900 p-1 px-2 rounded hover:text-blue-200"
        >
          <GlobeLock className="stroke-slate-200" width={21} height={21} />
          Privacy Policy
        </a>
        <a
          target="_blank"
          href="https://blazechat.se/legal/terms"
          className="text-slate-200  flex items-center gap-2 hover:bg-slate-900 p-1 px-2 rounded hover:text-blue-200"
        >
          <Scale className="stroke-slate-200" width={21} height={21} />
          Terms of Service
        </a>
        <a
          target="_blank"
          href="https://github.com/AndreRojasMartinsson/blazechat-fe"
          className="text-slate-200  flex items-center gap-2 hover:bg-slate-900 p-1 px-2 rounded hover:text-blue-200"
        >
          <GitHub className="w-[21px] h-[21px] fill-slate-200" />
          Github Repository
        </a>
      </nav>
      <footer className="absolute bottom-0 w-full border-t border-slate-700 p-4">
        <p className="text-slate-200 text-center">
          &copy; blazechat.se {copyright}
        </p>
      </footer>
    </main>
  );
}

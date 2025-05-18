import { GlobeLock, Pointer, Scale } from "lucide-react";
import GitHub from "./GitHub";
import NavButton from "./NavButton";
import ThemeSelector from "~/components/ThemeSelector";
import { Link } from "react-router";

const NAV_BUTTONS = [
  {
    href: "https://blazechat.se/legal/privacy",
    icon: <GlobeLock className="stroke-foreground" width={21} height={21} />,
    label: "Privacy Policy",
  },
  {
    href: "https://blazechat.se/legal/terms",
    icon: <Scale className="stroke-foreground" width={21} height={21} />,
    label: "Terms of Service",
  },
  {
    href: "https://github.com/AndreRojasMartinsson/blazechat-fe",
    icon: <GitHub />,
    label: "GitHub Repository",
  },
];

const NavBar = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <nav className="p-2 border border-mauve-6 gap-2 rounded shadow dark:shadow-lg z-10 flex flex-row items-center justify-center">
        {NAV_BUTTONS.map((button) => (
          <NavButton icon={button.icon} href={button.href}>
            {button.label}
          </NavButton>
        ))}
        <ThemeSelector />
      </nav>
      <ul className="gap-2 z-10 grid grid-cols-2 items-center justify-center">
        <li className="p-4 hover:cursor-pointer border bg-mauve-2 hover:bg-mauve-3 border-mauve-6 rounded shadow dark:shadow-lg relative">
          <Link className="w-full h-full" to="components">
            <h4 className="text-3xl font-black">Components</h4>
            <h5 className="text-lg font-semibold text-mauve-11 flex z-10 flex-row items-center">
              View the
              <span className="relative mx-1 my-4 font-bold text-amber-12 z-10">
                design system
                <div className="absolute h-[4px] top-6 w-full bg-amber-9 -rotate-2"></div>
              </span>
              components
            </h5>
            <Pointer
              className="animate-bounce text-foreground absolute bottom-0 z-0 opacity-5"
              width={48}
              height={48}
            />
          </Link>
        </li>
        <li className="p-4 border hover:cursor-pointer bg-mauve-2 hover:bg-mauve-3 border-mauve-6 rounded shadow dark:shadow-lg relative">
          <Link className="w-full h-full" to="https://api.blazechat.se/docs">
            <h4 className="text-3xl font-black">The API</h4>
            <h5 className="text-lg font-semibold text-mauve-11 flex z-10 flex-row items-center">
              View the
              <span className="relative mx-1 my-4 font-bold text-lime-12 z-10">
                API
                <div className="absolute h-[4px] top-6 w-full bg-lime-9 -rotate-2"></div>
              </span>
              of BlazeChat
            </h5>
            <Pointer
              className="animate-bounce text-foreground absolute bottom-0 z-0 right-4 opacity-5"
              width={48}
              height={48}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

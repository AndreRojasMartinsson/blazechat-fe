import { GlobeLock, Scale } from "lucide-react";
import GitHub from "./GitHub";
import NavButton from "./NavButton";
import ThemeSelector from "~/components/ThemeSelector";

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
    <nav className="p-2 border border-mauve-6 gap-2 rounded shadow dark:shadow-lg z-10 mt-10 flex flex-row items-center justify-center">
      {NAV_BUTTONS.map((button) => (
        <NavButton icon={button.icon} href={button.href}>
          {button.label}
        </NavButton>
      ))}
      <ThemeSelector />
    </nav>
  );
};

export default NavBar;

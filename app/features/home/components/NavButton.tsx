import { type ReactNode } from "react";

const NavButton: React.FC<NavButton.Props> = ({ icon, children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="transition-all duration-200 ease-in-out text-foreground flex items-center gap-2 hover:bg-mauve-4 p-1 px-2 rounded hover:text-brand-12" rel="noreferrer"
    >
      {icon}
      {children}
    </a>
  );
};

export default NavButton;

namespace NavButton {
  export interface Props {
    icon?: ReactNode;
    children?: ReactNode;
    href?: string;
  }
}

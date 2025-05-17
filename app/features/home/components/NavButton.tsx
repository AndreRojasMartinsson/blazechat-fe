import { memo, type ReactNode } from "react";

const NavButton: React.FC<Props> = ({ icon, children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="transition-all duration-200 ease-in-out text-slate-200  flex items-center gap-2 hover:bg-slate-900 p-1 px-2 rounded hover:text-blue-200"
    >
      {icon}
      {children}
    </a>
  );
};

export default memo(NavButton);

interface Props {
  icon: ReactNode;
  children: ReactNode;
  href: string;
}

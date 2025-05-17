import { memo, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Badge: React.FC<Props> = ({ children, className }) => (
  <p
    className={twMerge(
      "p-1 px-2 rounded-lg text-xs animate-bounce text-green-500 border border-green-500 bg-green-500/10 backdrop-blur-2xl",
      className
    )}
  >
    {children}
  </p>
);

export default memo(Badge);

interface Props {
  children?: ReactNode;
  className?: string;
}

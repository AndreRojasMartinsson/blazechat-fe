import { memo, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Badge: React.FC<Props> = ({ children, className }) => (
  <p
    className={twMerge(
      "p-1 px-2 rounded-lg text-xs animate-bounce text-lime-12 border border-lime-6 bg-lime-3 backdrop-blur-2xl",
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

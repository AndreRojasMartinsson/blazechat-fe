import { type ReactNode } from "react";
import Button from "../Button";
import { twMerge } from "tailwind-merge";

const Option: React.FC<Option.Props> = ({
  isSelected = false,
  onSelect = () => {},
  className,
  children,
}) => {
  return (
    <Button
      variant="ghost"
      className={twMerge(
        "rounded-none flex items-center gap-2",
        isSelected && "bg-brand-3",
        className
      )}
      size="small"
      onClick={onSelect}
    >
      {children}
    </Button>
  );
};

Option.displayName = "Option";

export default Option;

namespace Option {
  export interface Props {
    value: string;
    className?: string;
    children?: ReactNode;
    isSelected?: boolean;
    onSelect?: () => void;
  }
}

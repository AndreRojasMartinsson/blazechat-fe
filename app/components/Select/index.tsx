import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import Option from "./Option";
import { ChevronDown } from "lucide-react";

type SelectComponent = React.FC<Select.Props> & { Option: typeof Option };

const Select: SelectComponent = ({
  onChange,
  children,
  value,
  className,
  icon,
}) => {
  const [open, setOpen] = useState(false);

  // For every child that's a Select.Option, clone it and inject the two extra props
  const items = Children.toArray(children).map((child) => {
    if (isValidElement<Option.Props>(child) && child.type === Select.Option) {
      const childValue = child.props.value;

      return cloneElement(child, {
        isSelected: childValue === value,
        onSelect: () => {
          setOpen(false);

          if (onChange) {
            onChange(childValue);
          }
        },
      });
    }

    return child as ReactElement;
  });

  return (
    <div
      className={twMerge(
        "border relative bg-background border-mauve-7 rounded",
        open && "border-b-transparent rounded-b-none",
        className
      )}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-full flex items-center justify-between pl-3 pr-2 py-2"
      >
        <div className="flex items-center gap-2 flex-auto">
          {icon}
          {value}
        </div>
        <ChevronDown width={18} height={18} />
      </button>
      {open && (
        <ul className="flex flex-col absolute bg-background z-20 border border-mauve-7  -left-[1px] -right-[1px] rounded border-t-0 rounded-t-none">
          {items}
        </ul>
      )}
    </div>
  );
};

Select.Option = Option;

export default Select;

namespace Select {
  export interface Props {
    value?: string;
    icon?: ReactNode;
    className?: string;
    children?: ReactNode;
    onChange?: (newValue: string) => void;
  }
}

import {
  createContext,
  memo,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

namespace Select {
  export interface Props {
    value: string;
    children?: ReactNode;
    items?: string[];
    onChange: (newValue: string) => void;
  }
}

const Option: React.FC<{
  value: string;
  children?: ReactNode;
}> = ({ value, children }) => {
  const [onChange, setOpen, currentValue] = useContext(SelectContext);

  return (
    <Button
      variant="ghost"
      className={twMerge(
        "rounded-none",
        currentValue === value && "bg-brand-2"
      )}
      size="small"
      onClick={() => {
        onChange(value);
        setOpen(false);
      }}
    >
      {children}
    </Button>
  );
};

Option.displayName = "Option";

const SelectContext = createContext<
  [
    (newValue: string) => void,
    React.Dispatch<React.SetStateAction<boolean>>,
    string
  ]
>(undefined as any);

// className={twMerge(
//   "pl-3 pr-2 py-2 border bg-background border-mauve-7 rounded",
//   "flex items-center justify-between"
// )}

const Select: React.FC<Select.Props> & { Option: typeof Option } = ({
  items = [],
  onChange,
  children,
  value,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={twMerge(
        "border relative bg-background border-mauve-7 rounded",
        open && "border-b-transparent rounded-b-none"
      )}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-full flex items-center justify-between pl-3 pr-2 py-2"
      >
        {value}
        <ChevronDown width={18} height={18} />
      </button>
      {open && (
        <SelectContext.Provider value={[onChange, setOpen, value]}>
          <ul className="flex flex-col absolute bg-background z-20 border border-mauve-7  -left-[1px] -right-[1px] rounded border-t-0 rounded-t-none">
            {children}
          </ul>
        </SelectContext.Provider>
      )}
    </div>
  );
};

Select.Option = Option;

export default Select;

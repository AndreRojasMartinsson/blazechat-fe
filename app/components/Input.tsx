import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type HTMLInputTypeAttribute,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import type { z } from "zod";

const Input: React.FC<Input.Props> = ({
  type,
  className,
  name,
  label,
  icon,
  value,
  onChange = () => {},
  validators = {},
  ...props
}) => {
  const [dirty, setDirty] = useState(false);

  const validatorResults = useMemo(() => {
    const labels = Object.keys(validators);

    return labels.map((x) => {
      const validator = validators[x];
      const { success } = validator.safeParse(value);

      return { label: x, success };
    });
  }, [validators, value]);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
      setDirty(true);
    },
    [onChange]
  );

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label className="font-semibold text-mauve-11 text-xl" htmlFor={name}>
        {label}
      </label>
      <div className="flex flex-row items-center border border-mauve-7 rounded gap-2 pl-3">
        {icon}
        <input
          className="p-2 placeholder-mauve-11 pl-2 flex-auto appearance-none focus:outline-0"
          onChange={onInputChange}
          type={type}
          value={value}
          name={name}
          id={name}
          {...props}
        />
      </div>
      <ul className="flex flex-col mt-1 gap-1 list-disc list-inside">
        {validatorResults.map((result, idx) => {
          if (dirty === false || result.success) return undefined;

          return (
            <li
              key={idx}
              className={twMerge("text-red-11 text-sm font-medium")}
            >
              {result.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Input;

namespace Input {
  export interface Props<T = string> {
    // Placeholder
    type?: HTMLInputTypeAttribute;
    name?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
    required?: boolean;
    value?: T;
    onChange?: (newValue: T) => void;
    icon?: ReactNode;
    // Keys are the actual message shown if validator fails
    validators?: Record<string, z.ZodTypeAny>;
  }
}

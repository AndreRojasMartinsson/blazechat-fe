import { type ComponentProps } from "react";
import { variants, type ButtonVariants } from "./variants";
import { twMerge } from "tailwind-merge";
import { Loader } from "lucide-react";

const variantsWithBlackFG: ButtonVariants["variant"][] = ["hazard", "success"];

const Button: React.FC<Button.Props> = ({
  size,
  disabled,
  variant,
  className,
  loading = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(variants({ variant, size, loading }), className)}
    >
      {loading && (
        <Loader
          width={21}
          height={21}
          className={twMerge(
            "text-foreground animate-spin saturate-100",
            variantsWithBlackFG.includes(variant) && "text-background",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          )}
        />
      )}
      {children}
    </button>
  );
};

export default Button;

namespace Button {
  export interface Props
    extends ComponentProps<"button">,
      Omit<ButtonVariants, "loading"> {
    loading?: boolean;
  }
}

import { cva, type VariantProps } from "cva";

export const variants = cva(
  [
    "rounded",
    "transition-all duration-100",
    "border-2 border-transparent box-border",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-9",
          "dark:text-foreground text-background",
          "dark:stroke-foreground stroke-background",
        ],
        secondary: ["bg-brand-3", "dark:stroke-foreground stroke-background"],
        border: [
          "border border-brand-7",
          "bg-transparent",
          "dark:stroke-foreground stroke-background",
        ],
        ghost: [
          "bg-transparent",
          "text-brand-12",
          "dark:stroke-foreground stroke-background",
        ],
        destructive: [
          "bg-red-9",
          "text-red-2 dark:text-red-12",
          "dark:stroke-foreground stroke-background",
        ],
        hazard: [
          "bg-amber-9",
          "text-amber-12 dark:text-amber-2",
          "dark:stroke-background stroke-foreground",
        ],
        success: [
          "bg-lime-9",
          "text-lime-12 dark:text-lime-2",
          "dark:stroke-background stroke-foreground",
        ],
        disabled: [
          "bg-brand-4",
          "dark:text-foreground/40 text-background/40 saturate-20",
          "hover:cursor-not-allowed",
        ],
      },
      size: {
        small: ["px-2", "py-1", "text-sm"],
        medium: ["px-5 py-2", "text-base"],
        large: ["px-5 py-2", "text-lg"],
      },
      loading: {
        false: null,
        true: [
          "saturate-80",
          "cursor-wait",
          "text-transparent dark:text-transparent",
        ],
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        loading: false,
        class: "hover:bg-brand-10 active:bg-brand-10 active:border-brand-12/30",
      },
      {
        variant: "secondary",
        loading: false,
        class: "hover:bg-brand-4 active:bg-brand-5 active:border-brand-6",
      },
      {
        variant: "border",
        loading: false,
        class: "hover:bg-brand-4 active:bg-brand-5 active:border-brand-8",
      },
      {
        variant: "ghost",
        loading: false,
        class: "hover:bg-brand-4 active:bg-brand-5",
      },
      {
        variant: "destructive",
        loading: false,
        class: "hover:bg-red-10 active:bg-red-10 active:border-red-8",
      },
      {
        variant: "hazard",
        loading: false,
        class: "hover:bg-amber-10 active:bg-amber-10 active:border-amber-8",
      },
      {
        variant: "success",
        loading: false,
        class: "hover:bg-lime-10 active:bg-lime-10 active:border-lime-8",
      },
      {
        variant: "disabled",
        class: "bg-brand-4 saturate-20",
      },
    ],
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  }
);

export type ButtonVariants = VariantProps<typeof variants>;

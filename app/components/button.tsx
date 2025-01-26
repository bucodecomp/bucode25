import { cva } from "class-variance-authority";

export const primaryButton = cva(
  "bg-white text-ocean rounded-lg gap-2 hover:bg-white/80 active:bg-white/90 flex items-center justify-center transition-all ring-offset-ocean active:ring-2 active:ring-white/10 ring-transparent ring-offset-2",
  {
    variants: {
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
        lg: "h-10 px-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

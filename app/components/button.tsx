import { cva } from "cva";

export const primaryButton = cva(
  "bg-white text-ocean-0 font-medium rounded-lg gap-2 hover:bg-ocean-1000 active:bg-white/90 flex items-center justify-center transition-all ring-offset-ocean active:ring-2 active:ring-white/10 ring-transparent ring-offset-2",
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
  },
);

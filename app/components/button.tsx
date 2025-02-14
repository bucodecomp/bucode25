import { cva } from "cva";

export const primaryButton = cva(
  "bg-ocean-1000 text-ocean-0 font-medium rounded-md gap-2 hover:bg-ocean-1000 active:bg-ocean-1000/90 flex items-center justify-center transition-all ring-offset-ocean active:ring-2 active:ring-white/10 ring-transparent ring-offset-2",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4",
        lg: "h-10 px-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const secondaryButton = cva(
  "bg-ocean-950/2 text-ocean-950/90 ring-ocean-950/10 hover:text-ocean-950 ring font-medium rounded-md gap-2 hover:bg-ocean-950/8 hover:ring-ocean-950/16 active:bg-ocean-1000/90 flex items-center justify-center transition-all ring-offset-ocean active:ring-2 active:ring-white/10",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4",
        lg: "h-10 px-5",
      },
    },
  },
);

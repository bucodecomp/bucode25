import clsx from "clsx";
import { cva } from "cva";
import { Heading } from "./_base/line-heading";

const headContainerClass = cva("max-w-2xl flex flex-col", {
  variants: {
    align: {
      start: "items-start text-start",
      center: "items-center text-center",
    },
  },
});

export const SectionHead = ({
  size = "md",
  title,
  label,
  description,
  align = "start",
}: {
  size?: "md" | "lg";
  title: string;
  label?: string | undefined;
  description?: string | undefined;
  align?: "start" | "center";
}) => {
  return (
    <div className={headContainerClass({ align })}>
      <span className="flex items-center gap-3">
        {label && (
          <>
            <svg width="21" height="10">
              <title>Arrow Icon</title>
              <use href="#arrow-icon" />
            </svg>
            <span className="pb-0.5 font-display font-medium text-base text-gold-700 uppercase tracking-5xl">
              {label}
            </span>
            <svg width="21" height="10">
              <title>Arrow Icon</title>
              <use
                href="#arrow-icon"
                transform="scale(-1,1) translate(-21,0)"
              />
            </svg>
          </>
        )}
      </span>
      <h2
        className={clsx(
          "text-balance font-bold font-display",
          size === "lg"
            ? "text-[3.5rem] leading-[3.75rem]"
            : "text-[3rem] leading-[3.5rem]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-balance py-2 pt-4 font-sans text-lg text-ocean-950/75 leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

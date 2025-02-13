import { cva } from "cva";
import { Heading } from "./_base/line-heading";

const headContainerClass = cva("max-w-2xl flex flex-col gap-4", {
  variants: {
    align: {
      start: "items-start text-start",
      center: "items-center text-center",
    },
  },
});

export const SectionHead = ({
  title,
  label,
  description,
  align = "start",
}: {
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
            <span className="text-gold-800 font-medium uppercase tracking-5xl text-base">
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
      <h2 className="font-bold text-[3.5rem] leading-[3.75rem] font-display text-balance">
        {title}
      </h2>
      {description && (
        <p className="font-sans text-[#7494AF] text-lg leading-8 max-w-xl py-2">
          {description}
        </p>
      )}
    </div>
  );
};

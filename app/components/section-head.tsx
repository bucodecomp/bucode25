import { cva } from "cva";

const headContainerClass = cva("max-w-2xl flex flex-col gap-4", {
  variants: {
    align: {
      start: "items-start text-start",
      center: "items-center text-center",
    },
  },
});

export function SectionHead({
  title,
  label,
  description,
  align = "start",
}: {
  title: string;
  label?: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={headContainerClass({ align })}>
      <div className={`flex flex-col ${headContainerClass({ align })}`}>
        <span className="flex items-center gap-3">
          {label && (
            <>
              <svg width="21" height="10">
                <title>Arrow Icon</title>
                <use href="#arrow-icon" />
              </svg>
              <span className="text-[#FFCA68] uppercase tracking-[0.16em] text-base">
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
        <h2 className="font-semibold text-[56px] leading-[64px] text-[#C9E9FF]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="font-sans text-[#7494AF] text-lg leading-8 max-w-[644px]">
          {description}
        </p>
      )}
    </div>
  );
}

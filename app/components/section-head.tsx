import { cva } from "cva";

const headContainerClass = cva("max-w-2xl flex flex-col gap-4", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
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
        <h3 className="flex items-center gap-3">
          {label && (
            <>
              <svg width="0" height="0" style={{ position: "absolute" }}>
                <title>Arrow Icon</title>
              </svg>

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
        </h3>
        <h1 className="font-bold text-[56px] leading-[64px] text-[#C9E9FF] capitalize">
          {title}
        </h1>
      </div>
      {description && (
        <p className="font-sans text-[#7494AF] text-lg leading-8 max-w-[644px]">
          {description}
        </p>
      )}
    </div>
  );
}

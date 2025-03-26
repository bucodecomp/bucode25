import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { primaryButton, secondaryButton } from "../button";

const CTABackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full rounded-4xl bg-ocean-25">
      <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
    </div>
  );
};

const CTASectionHeadContent = {
  title: "Crave For Algorithms",
  description:
    "Unleash your algorithmic artistry - the crucible awaits your triumph!",
  label: "Compete in BuCode",
  align: "center" as const,
};

const CTASectionHead = ({
  title,
  description,
  label,
}: { title: string; description?: string; label?: string }) => {
  return (
    <div className={"flex max-w-2xl flex-col items-center text-center"}>
      <span className="flex items-center gap-3">
        {label && (
          <>
            <svg width="21" height="10">
              <title>Arrow Icon</title>
              <use href="#arrow-icon" />
            </svg>
            <span className="font-medium text-base text-gold-700 uppercase tracking-5xl">
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
      <h2 className="text-balance font-bold font-display text-7xl leading-20 tracking-sm">
        {title}
      </h2>
      {description && (
        <p className="pt-5 font-sans text-base text-ocean-950/85 leading-6 tracking-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export const CTA = () => {
  return (
    <div className="flex h-[82dvh] w-dvg flex-col items-stretch p-3">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl p-4">
        <CTABackground />
        <div className="flex flex-col items-center gap-6">
          <CTASectionHead {...CTASectionHeadContent} />
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className={primaryButton({
                size: "md",
              })}
            >
              <span>Build your team</span>
              <RiArrowRightLine className="-mr-1 h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className={secondaryButton({
                size: "md",
              })}
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

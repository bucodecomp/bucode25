import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { primaryButton, secondaryButton } from "../button";
import { SectionHead } from "../section-head";

const CTABackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full rounded-4xl bg-ocean-25">
      <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
    </div>
  );
};

export const CTA = () => {
  return (
    <section className="flex w-dvw flex-col items-stretch p-3 pb-40 pt-24">
      <div className="relative mx-auto flex h-full w-full max-w-screen-3xl items-center justify-center overflow-hidden rounded-4xl p-4 py-40">
        <CTABackground />
        <div className="flex flex-col items-center gap-6">
          <SectionHead
            size="lg"
            align="center"
            label="Compete in BuCode"
            title="Crave For Algorithms"
            description="Join the BuCode community and build your team to compete in the competition."
          />
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
    </section>
  );
};

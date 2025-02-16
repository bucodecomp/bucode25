import { SectionHead } from "../section-head";

const CTASectionHeadContent = {
  title: "Crave For Algorithms",
  description:
    "Unleash your algorithmic artistry - the crucible awaits your triumph!",
  label: "Compete in BuCode",
  align: "center" as const,
};

const CTABackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full rounded-4xl bg-ocean-25">
      <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
    </div>
  );
};

export const CTA = () => {
  return (
    <div className="flex h-[82dvh] w-dvg flex-col items-stretch p-3">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl p-4">
        <CTABackground />
        {false && <SectionHead {...CTASectionHeadContent} />}
      </div>
    </div>
  );
};

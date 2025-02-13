import { SectionHead } from "../section-head";

export const Hero = () => {
  return (
    <div className="flex h-dvh w-dvg flex-col items-stretch p-4">
      <div className="relative flex h-full w-full items-center justify-center rounded-4xl bg-ocean-25 p-4 pt-24">
        <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
        <div className="flex flex-col gap-4">
          <SectionHead
            title="Boğaziçi University Algorithmic Competition"
            description="As we get closer to the exciting moments, the countdown has started for the 
Qualification and Final Rounds. The big day is coming soon, don't miss it!"
            label="BuCode 2025"
            align="center"
          />
        </div>
      </div>
    </div>
  );
};

import { SectionHead } from "../section-head";

export const Hero = () => {
  return (
    <div className="w-dvg h-dvh p-4 flex flex-col items-stretch">
      <div className="rounded-4xl bg-ocean-25 p-4 h-full w-full pt-24 flex items-center justify-center">
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

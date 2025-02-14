import { Meteors } from "../magicui/meteors";
import { Particles } from "../magicui/particles";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full rounded-4xl bg-ocean-25">
      <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
      <span className="relative relative z-10 flex h-full items-center justify-center overflow-hidden">
        <Particles
          className="h-full w-full"
          color="#336383"
          refresh={true}
          size={0.6}
          quantity={600}
          ease={100}
          staticity={10}
        />
        <Meteors
          angle={120}
          className="absolute inset-0"
          number={32}
          maxDuration={30}
          minDuration={12}
          minDelay={0.2}
          maxDelay={2}
        />
      </span>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="flex h-dvh w-dvg flex-col items-stretch p-3">
      <div className="relative flex h-full w-full items-center justify-center rounded-4xl p-4 pt-24">
        <HeroBackground />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold font-display text-7xl text-ocean-1000">
            Boğaziçi University <br />
            Algorithm Competition
          </h1>
        </div>
      </div>
    </div>
  );
};

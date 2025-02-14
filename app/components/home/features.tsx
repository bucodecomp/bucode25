import { cva } from "cva";
import { SectionHead } from "../section-head";

const FourStars = () => {
  return (
    <>
      <div className="absolute w-[27px] h-[27px] -translate-x-1/2 -translate-y-1/2 top-0 left-0">
        <svg width="27" height="27" opacity="30%">
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className="absolute w-[27px] h-[27px] -translate-x-1/2 translate-y-1/2 bottom-0 left-0">
        <svg width="27" height="27" opacity="30%">
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className="absolute w-[27px] h-[27px] translate-x-1/2 -translate-y-1/2 top-0 right-0">
        <svg width="27" height="27" opacity="30%">
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className="absolute w-[27px] h-[27px] translate-x-1/2 translate-y-1/2 bottom-0 right-0">
        <svg width="27" height="27" opacity="30%">
          <use href="#cross-icon" />
        </svg>
      </div>
    </>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
  stars = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  stars?: boolean;
}) => {
  return (
    <div
      className={`relative flex max-w-lg flex-1 flex-col items-center gap-4 px-6 py-10`}
    >
      <div className="flex h-16 w-20 items-center justify-center rounded-lg border border-white/4 bg-[#091620]/2 bg-linear-[180deg,#fff0,#ffffff0a]">
        <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-display font-semibold text-2xl leading-8 tracking-[-0.01em]">
          {title}
        </h1>
        <p className="text-ocean-925/50 leading-8">{description}</p>
      </div>
      {stars && <FourStars />}
    </div>
  );
};

const ResponsiveSeperator = () => {
  return (
    <>
      <div className="lg:w-[1px] lg:self-stretch lg:bg-white/4" />
      <div className="h-[1px] w-full bg-white/4 lg:hidden" />
    </>
  );
};

export const Features = () => {
  return (
    <div className="container flex flex-col items-center gap-16 px-[105px] py-[120px]">
      <SectionHead
        label="Why BuCode?"
        title="What To Expect..."
        description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
        align="center"
      />
      <div className="relative flex w-full flex-col items-stretch border border-white/4 bg-[#255C8B]/2 lg:flex-row">
        <FeatureCard
          title="Thrilling Competition"
          description="As we get closer to the exciting moments, the countdown has started."
          icon={
            <svg width="20" height="20">
              <use href="#speedometer-icon" />
            </svg>
          }
        />
        <ResponsiveSeperator />
        <FeatureCard
          title="Rewarding Experience"
          description="As we get closer to the exciting moments, the countdown has started."
          icon={
            <svg width="20" height="20">
              <use href="#award-icon" />
            </svg>
          }
          stars
        />
        <ResponsiveSeperator />
        <FeatureCard
          title="Unforgettable Atmosphere"
          description="As we get closer to the exciting moments, the countdown has started."
          icon={
            <svg width="20" height="20">
              <use href="#rocket-icon" />
            </svg>
          }
        />
        <FourStars />
      </div>
    </div>
  );
};

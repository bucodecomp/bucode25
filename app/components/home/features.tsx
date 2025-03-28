import {
  RiArrowRightLine,
  RiBrain2Line,
  RiCupLine,
  RiGiftLine,
  RiRocketLine,
} from "@remixicon/react";
import clsx from "clsx";
import { cva } from "cva";
import { Link } from "react-router";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";

const starClass = cva("absolute h-[27px] w-[27px]", {
  variants: {
    position: {
      topLeft: "-translate-x-1/2 -translate-y-1/2 top-0 left-0",
      bottomLeft: "-translate-x-1/2 translate-y-1/2 bottom-0 left-0",
      topRight: "translate-x-1/2 -translate-y-1/2 top-0 right-0",
      bottomRight: "translate-x-1/2 translate-y-1/2 bottom-0 right-0",
    },
  },
});

const FourStars = () => {
  return (
    <>
      <div className={starClass({ position: "topLeft" })}>
        <svg
          width="27"
          height="27"
          opacity="12%"
          transform="translate(-.5 -.5)"
        >
          <title>Star</title>
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className={starClass({ position: "bottomLeft" })}>
        <svg width="27" height="27" opacity="12%" transform="translate(-.5 .5)">
          <title>Star</title>
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className={starClass({ position: "topRight" })}>
        <svg width="27" height="27" opacity="12%" transform="translate(.5 -.5)">
          <title>Star</title>
          <use href="#cross-icon" />
        </svg>
      </div>
      <div className={starClass({ position: "bottomRight" })}>
        <svg width="27" height="27" opacity="12%" transform="translate(.5 .5)">
          <title>Star</title>
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
  isMiddle = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  stars?: boolean;
  isMiddle?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center gap-4 px-6 py-10",
        isMiddle && "border-ocean-1000/10",
      )}
    >
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-linear-[180deg,var(--color-ocean-100),var(--color-ocean-100)] ring ring-ocean-1000/10">
        <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-display font-semibold text-2xl leading-8 tracking-[-0.01em]">
          {title}
        </h1>
        <p className="text-ocean-950/75 leading-8">{description}</p>
      </div>
      {stars && <FourStars />}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-64">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center gap-16 px-4 md:px-10">
        <SectionHead
          label="Why BuCode?"
          title="What To Expect..."
          description="This is your chance to showcase your excellence, but there is more to BuCode than just the competition."
          align="center"
        />
        <div className="relative grid w-full grid-cols-1 items-stretch border border-ocean-1000/2 md:grid-cols-3">
          <FeatureCard
            title="Pro Community"
            description="A chance for best minds in the country to be in the same room at the same time."
            icon={<RiBrain2Line />}
          />
          <FeatureCard
            title="Exceptional Ambiance"
            description="12 hours of caffeine-fueled problem solving, with the best view in Istanbul."
            icon={<RiCupLine />}
            stars
            isMiddle
          />
          <FeatureCard
            title="Big O Bigger Rewards"
            description="Generous prize pool, because intelligence should come with perks."
            icon={<RiGiftLine />}
          />
          <FourStars />
        </div>
        <div className="flex items-center gap-1.5">
          <Link
            to="/about"
            className={`${primaryButton({ size: "md" })} w-fit`}
          >
            <span>Competition Rules</span>
            <RiArrowRightLine className="-mr-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

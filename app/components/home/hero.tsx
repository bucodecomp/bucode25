import { RiArrowRightLine, RiInformationFill } from "@remixicon/react";
import { Link } from "react-router";
import { primaryButton, secondaryButton } from "../button";
import { Meteors } from "../magicui/meteors";
import { Particles } from "../magicui/particles";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full rounded-4xl bg-ocean-25">
      <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius-4xl)_-_calc(2_*_var(--spacing)))] ring-2 ring-ocean-100" />
      <span className="relative z-10 flex h-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex h-full w-full items-center justify-start">
          <svg
            width="806"
            height="402"
            viewBox="0 0 806 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Background shape</title>
            <g opacity="0.04" filter="url(#filter0_f_4437_14585)">
              <path
                d="M726 251C726 312.58 467 342 355.5 269C187.364 346.478 59.1469 342.047 84 232C107 161 288.594 80 417 80C545.406 80 726 189.42 726 251Z"
                fill="#7ABDC3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4437_14585"
                x="0.910156"
                y="0"
                width="805.09"
                height="401.684"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="40"
                  result="effect1_foregroundBlur_4437_14585"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <Particles
          className="h-full w-full"
          color="#336383"
          refresh={true}
          size={0.4}
          quantity={600}
          ease={100}
          staticity={10}
        />
        <div className="absolute inset-0">
          <Meteors
            angle={120}
            className="absolute inset-0"
            number={32}
            maxDuration={30}
            minDuration={12}
            minDelay={0.2}
            maxDelay={2}
          />
        </div>
      </span>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="flex h-dvh w-dvg flex-col items-stretch p-3">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl p-4 pt-24">
        <HeroBackground />
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-10">
          <div className="flex h-full w-full flex-col justify-center gap-0 py-10 pb-20 md:py-20 md:pb-40">
            <div className="flex items-center gap-3">
              <span className="font-medium text-base text-gold-700 uppercase tracking-5xl">
                BuCode 2025
              </span>
              <svg width="21" height="10">
                <title>Arrow Icon</title>
                <use
                  href="#arrow-icon"
                  transform="scale(-1,1) translate(-21,0)"
                />
              </svg>
            </div>
            <h1 className="font-bold font-display text-5xl text-ocean-975 md:text-6xl lg:text-7xl">
              Boğaziçi University <br />
              Algorithm Competition
            </h1>
            <p className="max-w-xl text-balance py-4 text-base text-ocean-925/80 leading-8 md:py-5 md:text-lg">
              Ready to battle through the greatest minds in the realm of
              algorithms? Showcase your skills in BuCode 2025!
            </p>
            <div className="flex items-center gap-4 py-3">
              <Link
                to="/register"
                className={primaryButton({
                  size: "md",
                })}
              >
                <span>Build your team</span>
              </Link>
              <Link
                to="/about"
                className={secondaryButton({
                  size: "md",
                })}
              >
                <span>Competition Rules</span>
                <RiArrowRightLine className="-mr-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center gap-2 p-1 pt-8">
              <RiInformationFill className="h-4 w-4 text-ocean-900/50" />
              <p className="text-ocean-900/50 text-xs">
                BuCode operates under{" "}
                <a
                  target="_blank"
                  href="https://compec.org/"
                  rel="noreferrer"
                  className="font-medium text-ocean-900/70 transition-colors hover:text-ocean-900"
                >
                  COMPEC
                </a>
                , Boğaziçi IT Club.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { RiArrowRightLine } from "@remixicon/react";
import { cva } from "cva";
import { useState } from "react";
import { Link } from "react-router";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";

const qualificationClass = cva("", {
  variants: {
    active: {
      true: "bg-[#9FD5FA]/12 bg-[linear-gradient(to_right,_rgb(255,255,255,0.08),_rgb(255,255,255,0.0))] text-white",
      false: "bg-transparent text-[#608197]",
    },
  },
  defaultVariants: {
    active: true,
  },
});

const finalClass = cva("", {
  variants: {
    active: {
      true: "bg-[#9FD5FA]/12 bg-[linear-gradient(to_left,_rgb(255,255,255,0.08),_rgb(255,255,255,0.0))] text-white",
      false: "bg-transparent text-[#608197]",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const rectangleClass = cva("h-full w-[2px]", {
  variants: {
    active: {
      true: "bg-[#0B1B26]",
      false: "bg-[#1D323F]",
    },
  },
  defaultVariants: {
    active: true,
  },
});

const CounterDigit = ({
  digit,
  timeUnit,
}: { digit: number; timeUnit: string }) => {
  return (
    <div className="flex w-[120px] flex-col items-center">
      <div className="font-sans font-semibold text-[#C9E9FF] text-[64px] leading-18 tracking-[-0.01em]">
        {digit}
      </div>
      <div className="font-medium font-sans text-[#7494AF] text-base leading-6">
        {timeUnit}
      </div>
    </div>
  );
};

const DigitSeperator = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`flex h-full w-[80px] flex-col items-center justify-center${visible ? "" : " hidden md:flex"}`}
    >
      <div className="h-12 w-[1px] bg-[radial-gradient(circle_at_center,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
    </div>
  );
};

export const Counter = () => {
  const [activeTab, setActiveTab] = useState<string>("qualification");
  console.log(activeTab);

  return (
    <div className="w-dvg p-4">
      <div className="h-full rounded-4xl border border-[#416279]/24 bg-[#081016] px-10 py-30">
        <div className="flex h-full flex-col items-center gap-12">
          <SectionHead
            title="Lift Up Your Head."
            label="Goodbye Friend"
            description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
            align="center"
          />
          <div className="flex flex-col items-center gap-10">
            <div className="flex w-fit overflow-hidden rounded-[8px] border border-[#446477]/40">
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className={`flex w-[144px] cursor-pointer items-center justify-center ${qualificationClass({ active: activeTab === "qualification" })} px-6 py-1 font-medium font-sans text-base leading-8`}
                onClick={() => setActiveTab("qualification")}
              >
                Qualification
              </div>
              <div className="flex h-full">
                <div
                  className={`${rectangleClass({ active: activeTab === "qualification" })}`}
                />
                <div
                  className={`${rectangleClass({ active: activeTab !== "qualification" })}`}
                />
                <div
                  className={`${rectangleClass({ active: activeTab === "qualification" })}`}
                />
                <div
                  className={`${rectangleClass({ active: activeTab !== "qualification" })}`}
                />
              </div>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className={`flex w-[144px] cursor-pointer items-center justify-center ${finalClass({ active: activeTab === "final" })} px-6 py-1 font-medium font-sans text-base leading-8`}
                onClick={() => setActiveTab("final")}
              >
                Finals
              </div>
            </div>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full items-center gap-3">
                <div className="h-[1px] flex-1 bg-[linear-gradient(to_left,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
                <h1 className="pb-1 font-bold font-display text-[#446377] text-sm uppercase leading-5 tracking-4xl">
                  April 20, 2025
                </h1>
                <div className="h-[1px] flex-1 bg-[linear-gradient(to_right,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
              </div>
              <div className="grid grid-cols-3 place-items-center gap-y-12 md:grid-cols-7 md:gap-y-0">
                <CounterDigit digit={19} timeUnit="days" />
                <DigitSeperator visible={true} />
                <CounterDigit digit={5} timeUnit="hours" />
                <DigitSeperator visible={false} />
                <CounterDigit digit={7} timeUnit="minutes" />
                <DigitSeperator visible={true} />
                <CounterDigit digit={32} timeUnit="seconds" />
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="h-[1px] flex-1 bg-[linear-gradient(to_left,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
                <h1 className="relative pb-1 font-bold font-display text-[#446377] text-sm uppercase leading-5 tracking-4xl before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-[linear-gradient(to_left,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))] before:['']">
                  12:00 PM
                </h1>
                <div className="h-[1px] flex-1 bg-[linear-gradient(to_right,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Vibration position="left" />
            <Link
              to="/about"
              className={`${primaryButton({ size: "md" })} w-fit`}
            >
              <span>BuCode 2024 Recap</span>
              <RiArrowRightLine className="-mr-1 h-4 w-4" />
            </Link>
            <Vibration position="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

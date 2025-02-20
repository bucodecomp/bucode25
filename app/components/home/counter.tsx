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

export const Counter = () => {
  const [activeTab, setActiveTab] = useState<string>("qualification");

  return (
    <div className="h-dvh w-dvg p-4">
      <div className="h-full rounded-4xl border border-[#416279]/24 bg-[#081016] px-10 py-30">
        <div className="flex h-full flex-col items-center gap-12">
          <SectionHead
            title="Lift Up Your Head."
            label="Goodbye Friend"
            description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
            align="center"
          />
          <div className="flex w-[720px] flex-col items-center gap-10">
            <div className="flex w-fit items-center overflow-hidden rounded-[8px] border border-[#446477]/40">
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

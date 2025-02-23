import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";

export const Tribute = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-16 px-10 py-30">
        <SectionHead
          label="Past Stories"
          title="The Colors Will Change"
          description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
          align="start"
        />
        <div className="flex h-[320px] gap-6">
          <img
            src="/images/tribute.png"
            alt="Tribute"
            className="w-[480px] rounded-[12px] object-cover"
          />
          <div className="flex flex-1 flex-col gap-6 px-10 py-24">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold font-display text-[#C9E9FF] text-[40px] leading-12 tracking-[-0.01em]">
                For a Better Day
              </h1>
              <p className="max-w-[400px] font-sans text-[#7494AF] text-base leading-8">
                As we get closer to the exciting moments, the countdown has
                started for the Qualification and
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
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
      </div>
    </section>
  );
};

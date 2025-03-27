import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";

export const Tribute = () => {
  return (
    <section>
      <div className="container mx-auto flex max-w-screen-2xl flex-col gap-16 px-10 py-48">
        <SectionHead
          label="Last Year"
          title="Birth of BuCode"
          description="Everything started when a bunch of students dreamed of bringing poeple who share the same passion for algorithms and coding together."
          align="start"
        />
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <img
            src="/images/tribute.png"
            alt="Tribute"
            className="w-[480px] rounded-[12px] object-cover"
          />
          <div className="flex flex-1 flex-col gap-6 px-2 py-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold font-display text-[#C9E9FF] text-[40px] leading-12 tracking-[-0.01em]">
                A dream came true.
              </h1>
              <p className="max-w-[400px] font-sans text-[#7494AF] text-base leading-8">
                Take a look at the moments from last year that makes us proud
                and memories we cherish to this day.
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

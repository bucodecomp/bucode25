import { RiArrowRightLine } from "@remixicon/react";
import { cva } from "cva";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";
import { SlidingNumber } from "../ui/sliding-number";

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
  if (digit === 1) {
    timeUnit = timeUnit.slice(0, -1);
  }

  return (
    <div className="flex w-[120px] flex-col items-center">
      <div className="font-sans font-semibold text-[#C9E9FF] text-[64px] leading-18 tracking-[-0.01em]">
        <SlidingNumber value={digit} padStart={true} />
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

const getRemainingTime = (targetOrg: Date) => {
  const now = new Date();
  const target = new Date(targetOrg);
  // target.setHours(target.getHours() - 3);
  const diff = target.getTime() - now.getTime();
  const remDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const remHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const remMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const remSeconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { remDays, remHours, remMinutes, remSeconds };
};

const DateWithCoolLines = ({ date }: { date: string }) => {
  return (
    <div className="flex w-full items-center gap-3">
      <div className="h-[1px] flex-1 bg-[linear-gradient(to_left,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
      <h1 className="pb-1 font-bold font-display text-[#446377] text-sm uppercase leading-5 tracking-4xl">
        {date}
      </h1>
      <div className="h-[1px] flex-1 bg-[linear-gradient(to_right,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
    </div>
  );
};

const DateCounter = ({ date }: { date: Date }) => {
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const day = date.getDate();
  const year = date.getFullYear();
  const [hour, amPm] = date
    .toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: "UTC",
    })
    .split(" ");
  const minute = date.getMinutes();

  const { remDays, remHours, remMinutes, remSeconds } = getRemainingTime(date);

  const [days, setDays] = useState<number>(remDays);
  const [hours, setHours] = useState<number>(remHours);
  const [minutes, setMinutes] = useState<number>(remMinutes);
  const [seconds, setSeconds] = useState<number>(remSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      const { remDays, remHours, remMinutes, remSeconds } =
        getRemainingTime(date);
      setDays(remDays);
      setHours(remHours);
      setMinutes(remMinutes);
      setSeconds(remSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="flex w-full flex-col gap-6">
      <DateWithCoolLines date={`${month} ${day}, ${year}`} />
      <div className="grid grid-cols-3 place-items-center gap-y-12 md:grid-cols-7 md:gap-y-0">
        <CounterDigit digit={days} timeUnit="days" />
        <DigitSeperator visible={true} />
        <CounterDigit digit={hours} timeUnit="hours" />
        <DigitSeperator visible={false} />
        <CounterDigit digit={minutes} timeUnit="minutes" />
        <DigitSeperator visible={true} />
        <CounterDigit digit={seconds} timeUnit="seconds" />
      </div>
      <DateWithCoolLines
        date={`${hour.padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${amPm}`}
      />
    </div>
  );
};

export const Counter = () => {
  const [activeTab, setActiveTab] = useState<string>("qualification");

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
            <div className="flex h-10 w-fit overflow-hidden rounded-[8px] border border-[#446477]/40">
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
            {activeTab === "qualification" ? (
              <DateCounter date={new Date("2025-04-20T12:00:00Z")} />
            ) : (
              <DateCounter date={new Date("2025-04-23T14:15:00Z")} />
            )}
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

import { RiArrowRightLine } from "@remixicon/react";
import { cva } from "cva";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Vibration, primaryButton } from "../button";
import { SectionHead } from "../section-head";
import { SlidingNumber } from "../ui/sliding-number";

const tabTextClass = cva("transition-all", {
  variants: {
    active: {
      true: "bg-white/6 text-white",
      false:
        "bg-transparent text-ocean-975/50 hover:bg-white/2 active:bg-white/6 hover:text-ocean-975/60",
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
  const unit = digit === 1 ? timeUnit.slice(0, -1) : timeUnit;
  return (
    <div className="flex w-[120px] flex-col items-center">
      <div className="font-sans font-semibold text-[#C9E9FF] text-[64px] leading-18 tracking-[-0.01em]">
        <SlidingNumber value={digit} padStart={true} />
      </div>
      <div className="font-medium font-sans text-[#7494AF] text-base leading-6">
        {unit}
      </div>
    </div>
  );
};

const DigitSeparator = ({ visible }: { visible: boolean }) => (
  <div
    className={cn("flex h-full w-[80px] flex-col items-center justify-center", {
      "hidden md:flex": !visible,
    })}
  >
    <div className="h-12 w-[1px] bg-[radial-gradient(circle_at_center,_rgb(99,140,164,0.64),_rgb(99,140,164,0.0))]" />
  </div>
);

const getRemainingTime = (targetOrg: Date) => {
  const now = new Date();
  const target = new Date(targetOrg);
  const diff = target.getTime() - now.getTime();
  const remDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const remHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const remMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const remSeconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { remDays, remHours, remMinutes, remSeconds };
};

const LineText = ({ text }: { text: string }) => (
  <div className="flex w-full items-center gap-3">
    <div className="h-[1px] flex-1 bg-gradient-to-l from-ocean-900/40 to-ocean-900/0" />
    <h1 className="pb-1 font-bold font-display text-ocean-900/40 text-sm uppercase leading-5 tracking-4xl">
      {text}
    </h1>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-ocean-900/40 to-ocean-900/0" />
  </div>
);

const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  return formatter.format(date);
};

const formatTime = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  });
  return formatter.format(date);
};

const DateCounter = ({ date }: { date: Date }) => {
  const [time, setTime] = useState(getRemainingTime(date));

  const updateCountdown = useCallback(() => {
    setTime(getRemainingTime(date));
  }, [date]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  const { remDays, remHours, remMinutes, remSeconds } = time;
  const dateText = formatDate(date);
  const timeText = formatTime(date);

  return (
    <div className="flex w-full flex-col gap-6">
      <LineText text={dateText} />
      <div className="grid grid-cols-3 place-items-center gap-y-12 md:grid-cols-7 md:gap-y-0">
        <CounterDigit digit={remDays} timeUnit="days" />
        <DigitSeparator visible={true} />
        <CounterDigit digit={remHours} timeUnit="hours" />
        <DigitSeparator visible={false} />
        <CounterDigit digit={remMinutes} timeUnit="minutes" />
        <DigitSeparator visible={true} />
        <CounterDigit digit={remSeconds} timeUnit="seconds" />
      </div>
      <LineText text={timeText} />
    </div>
  );
};

export const Counter = () => {
  const [activeTab, setActiveTab] = useState<string>("qualification");

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-4xl p-4">
        <div className="h-full rounded-4xl bg-ocean-50 px-10 py-30">
          <div className="flex h-full flex-col items-center gap-12">
            <SectionHead
              title="Lift Up Your Head."
              label="Excitement Grows"
              description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
              align="center"
            />
            <div className="flex flex-col items-center gap-10">
              <div
                role="tablist"
                aria-label="Countdown Tabs"
                className="flex h-10 w-fit overflow-hidden rounded-[8px] ring ring-ocean-950/10"
              >
                {["qualification", "final"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-controls={`tabpanel-${tab}`}
                    id={`tab-${tab}`}
                    className={cn(
                      tabTextClass({ active: activeTab === tab }),
                      "flex w-[144px] cursor-pointer items-center justify-center px-6 py-1 font-medium font-sans text-base leading-8",
                    )}
                    onClick={() => setActiveTab(tab)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveTab(tab);
                      }
                    }}
                    tabIndex={0}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                className="w-full"
              >
                {activeTab === "qualification" ? (
                  <DateCounter date={new Date("2025-04-20T12:00:00Z")} />
                ) : (
                  <DateCounter date={new Date("2025-04-23T14:15:00Z")} />
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Vibration position="left" />
              <Link
                to="/register"
                className={cn(primaryButton({ size: "md" }), "w-fit")}
              >
                <span>Register BuCode 25</span>
                <RiArrowRightLine className="-mr-1 h-4 w-4" />
              </Link>
              <Vibration position="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

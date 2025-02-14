"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": `${angle}deg`,
      top: -50,
      left: `calc(-50% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: `${-maxDuration + (Math.random() * (maxDelay - minDelay) + minDelay)}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={`${idx}-${style.animationDelay}`}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-ocean-800/20 shadow-[0_0_0_2px_#ffffff10]",
            className,
          )}
        >
          <div className="-z-10 -translate-y-1/2 pointer-events-none absolute top-1/2 h-px w-[50px] bg-gradient-to-r from-ocean-800/20 to-transparent" />
        </span>
      ))}
    </>
  );
};

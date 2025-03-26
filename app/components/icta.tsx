import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router";
import { linkClass } from "./about/rules";
import { primaryButton, secondaryButton } from "./button";

export const ICTA = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-10">
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-ocean-50 p-10 ring-2 ring-ocean-50 ring-offset-4 ring-offset-ocean-100 md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="font-semibold text-[2.5rem] leading-[2.75rem]">
              Got something to say?
            </h2>
            <span>
              Feel free to contact us at at{" "}
              <a className={linkClass} href="mailto:contact@bucodecomp.com">
                contact@bucodecomp.com
              </a>
              .
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link className={secondaryButton({ size: "md" })} to="/contact">
              <span>Competition Rules</span>
            </Link>
            <Link className={primaryButton({ size: "md" })} to="/contact">
              <span>Say Hi!</span>
              <RiArrowRightLine className="-mr-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

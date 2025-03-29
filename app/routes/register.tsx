import { RiArrowRightLine, RiTimerFill } from "@remixicon/react";
import { Link } from "react-router";
import { linkClass } from "~/components/about/rules";
import { primaryButton, secondaryButton } from "~/components/button";
import { Footer } from "~/components/home/footer";
import { Hero } from "~/components/home/hero";
import { ICTA } from "~/components/icta";
import { Navbar } from "~/components/navbar";
import { SectionHead } from "~/components/section-head";
import type { Route } from "./+types/home";
import faq from "./faq";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "Register for BuCode 25" },
    {
      name: "description",
      content:
        "Sign up for BuCode and put your algorithm skills to the test! Register now to compete, solve challenges, and climb the leaderboard! ",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Register({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Navbar />
      <section className="py-48">
        <div className="container mx-auto flex max-w-screen-2xl flex-col items-center gap-20 px-4 md:px-10">
          <div className="flex flex-col items-center gap-10">
            <SectionHead
              title="Register for BuCode 25"
              label="Register"
              description="Compete against the best minds in the algorithmic world."
              align="center"
            />
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className={primaryButton({
                  size: "md",
                })}
              >
                <span>Event Details</span>
                <RiArrowRightLine className="-mr-1 h-4 w-4" />
              </Link>
              <Link
                to="https://www.instagram.com/bucodecomp/"
                className={secondaryButton({
                  size: "md",
                })}
                target="_blank"
              >
                <span>Follow Us</span>
              </Link>
            </div>
          </div>
          <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-2 rounded-3xl bg-ocean-50 px-4 py-8 ring-1 ring-ocean-50 ring-offset-2 ring-offset-ocean-100 md:px-10">
            <div className="rounded-full p-4 ring ring-ocean-950/8">
              <RiTimerFill className="h-5 w-5 text-ocean-925/50" />
            </div>
            <span className="text-center text-ocean-925/50 leading-7">
              We will open the applications shortly. <br />
              You can follow our{" "}
              <a
                href="https://www.instagram.com/bucodecomp/"
                className={linkClass}
              >
                Instagram account
              </a>{" "}
              to get the latest updates.
            </span>
          </div>
        </div>
      </section>
      <ICTA />
      <Footer />
    </main>
  );
}

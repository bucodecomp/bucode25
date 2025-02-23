import { useRef } from "react";
import { Counter } from "~/components/home/counter";
import { CTA } from "~/components/home/cta";
import { Features } from "~/components/home/features";
import { Footer } from "~/components/home/footer";
import { Hero } from "~/components/home/hero";
import { Teaser } from "~/components/home/teaser";
import { Tribute } from "~/components/home/tribute";
import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  console.log(error);
  return [
    { title: "BuCode Landing Page" },
    {
      name: "description",
      content: "BuCode is a competitive programming contest.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex min-h-dvh flex-col items-stretch justify-center">
      <Navbar />
      <Hero />
      <Features />
      <Teaser />
      <Counter />
      <Tribute />
      <CTA />
      <Footer />
    </main>
  );
}

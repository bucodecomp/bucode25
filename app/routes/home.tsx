import { Features } from "~/components/home/features";
import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/navbar";
import { SectionHead } from "~/components/section-head";
import { Test } from "~/components/test";
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
  return (
    <main className="flex min-h-dvh flex-col items-stretch justify-center">
      <Navbar />
      <Hero />
      <Features />
      <Test />
    </main>
  );
}

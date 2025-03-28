import { Rules } from "~/components/about/rules";
import { CTA } from "~/components/home/cta";
import { Footer } from "~/components/home/footer";
import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "About BuCode" },
    {
      name: "description",
      content:
        "Get general information about BuCode algorithm competition. Learn important dates and competition rules.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-stretch justify-center">
      <Navbar />
      <Rules />
      <CTA />
      <Footer />
    </main>
  );
}

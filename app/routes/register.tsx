import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "Register for BuCode 25" },
    {
      name: "description",
      content:
        "BuCode 25 is a competition for university students to showcase their competitive programming skills. ",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Contact({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-stretch justify-center">
      <Navbar />
    </main>
  );
}

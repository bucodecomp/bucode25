import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "Contact BuCode" },
    {
      name: "description",
      content:
        "Get in touch with the organizers of BuCode. Have questions about rules, registration, or technical issues? Contact us for support and assistance!",
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

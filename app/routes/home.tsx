import { Hero } from "~/components/home/hero";
import { SectionHead } from "~/components/section-head";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  console.log(error);
  return [
    { title: "BuCode Landing Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh">
      <SectionHead
        title="Best in class web design and development"
        description="We offer a wide range of services to help you grow your business."
        label="Our Services"
        align="center"
      />
    </main>
  );
}

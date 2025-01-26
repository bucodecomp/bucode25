import { Hero } from "~/components/home/hero";
import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <Hero />
      <div className="h-screen w-full bg-ocean/80" />
    </main>
  );
}

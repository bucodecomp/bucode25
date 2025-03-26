import { Footer } from "~/components/home/footer";
import { ICTA } from "~/components/icta";
import { Navbar } from "~/components/navbar";
import { SectionHead } from "~/components/section-head";
import { TeamHero } from "~/components/team/hero";
import type { TeamMember } from "~/components/team/team-card";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "BuCode Team" },
    {
      name: "description",
      content:
        "Get to know about the dedicated individuals, shaping the run of 2025 at BuCode Algorithm Competition.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export const subteams = [
  {
    label: "Lead",
    name: "Leadership",
    description: "Passionate Workers",
  },
  {
    label: "Algo",
    name: "Algorithm",
    description: "Problem Setters",
  },
  {
    label: "Dev",
    name: "Development",
    description: "Bits & Pixels",
  },
  {
    label: "Org",
    name: "Organization",
    description: "Passionate Workers",
  },
] as const;

// 0: Lead
// 1: Algo
// 2: Dev
// 3: Org
const team: TeamMember[] = [
  {
    name: "John Doe",
    subteam: subteams[0],
    bio: "John Doe is a software engineer at Google",
    image: "/images/team/john-doe.jpg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
];

export default function Contact({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Navbar />
      <TeamHero />
      {subteams.map((subteam) => {
        return (
          <section key={subteam.name} className="py-16">
            <div className="container mx-auto flex max-w-screen-2xl flex-col gap-16 px-4 md:px-10">
              <SectionHead
                title={subteam.description}
                align="start"
                label={subteam.name}
              />
            </div>
          </section>
        );
      })}
      <ICTA />
      <Footer />
    </main>
  );
}

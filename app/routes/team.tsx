import { Footer } from "~/components/home/footer";
import { ICTA } from "~/components/icta";
import { Navbar } from "~/components/navbar";
import { SectionHead } from "~/components/section-head";
import { TeamHero } from "~/components/team/hero";
import { TeamCard, type TeamMember } from "~/components/team/team-card";
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
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Jane Doe",
    subteam: subteams[1],
    bio: "Jane Doe is a software engineer at Google",
    image: "/images/team/jane-doe.jpg",
    links: {
      github: "https://github.com/jane-doe",
      linkedin: "https://www.linkedin.com/in/jane-doe",
      twitter: "https://twitter.com/jane-doe",
    },
  },
  {
    name: "John Doe",
    subteam: subteams[2],
    bio: "John Doe is a software engineer at Google",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "John Doe",
    subteam: subteams[3],
    bio: "John Doe is a software engineer at Google",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
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
            <div className="container mx-auto flex max-w-screen-2xl flex-col gap-12 px-4 md:px-10">
              <SectionHead
                title={subteam.description}
                align="start"
                label={subteam.name}
              />
              <div className="grid grid-cols-3 gap-6">
                {team
                  .filter((e) => e.subteam === subteam)
                  .map((member) => {
                    return <TeamCard key={member.name} member={member} />;
                  })}
              </div>
            </div>
          </section>
        );
      })}
      <ICTA />
      <Footer />
    </main>
  );
}

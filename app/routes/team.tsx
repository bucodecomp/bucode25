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
    description: "Guiding Beacons",
  },
  {
    label: "Algo",
    name: "Algorithm",
    description: "Puzzle Masters",
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
    name: "Işıl Su Karakuzu",
    subteam: subteams[0],
    bio: "Director of BuCode",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQG7_il61S-hvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683663177233?e=1748476800&v=beta&t=9noaOBFCihxB7VvT25TesX_RX_E7uP6bPAn6t9bGYak",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Tuğra Acar",
    subteam: subteams[0],
    bio: "Co-Director of BuCode",
    image: "/images/team/jane-doe.jpg",
    links: {
      github: "https://github.com/jane-doe",
      linkedin: "https://www.linkedin.com/in/jane-doe",
      twitter: "https://twitter.com/jane-doe",
    },
  },
  {
    name: "Ümit Can Evleksiz",
    subteam: subteams[2],
    bio: "Design and Development Lead",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Özgür Deniz Demir",
    subteam: subteams[2],
    bio: "Developer",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Ahmed Faruk Özgür",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Berk Sel",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Atakan Yaşar",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Fatih Solak",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Hakan Gökdoğan",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Şevket Onur Yılmaz",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Utku Çelik",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Yusuf Akın",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Melih Akpınar",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Celaleddin Ömer Sağlam",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Emin Ersüs",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Damla Demirok",
    subteam: subteams[3],
    bio: "Event Organization",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Nil Zeren Doğan",
    subteam: subteams[3],
    bio: "Event Organization",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Umut Efe Seki",
    subteam: subteams[3],
    bio: "Sponsorship",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Ömer Taha Örnek",
    subteam: subteams[3],
    bio: "Sponsorship",
    image: "/images/team/john-doe.jpg",
    links: {
      github: "https://github.com/john-doe",
      linkedin: "https://www.linkedin.com/in/john-doe",
      twitter: undefined,
    },
  },
  {
    name: "Musa Kaan Güney",
    subteam: subteams[3],
    bio: "Event Organization",
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
            <div className="container mx-auto flex max-w-screen-xl flex-col gap-12 px-4 md:px-10">
              <SectionHead
                title={subteam.description}
                align="start"
                label={subteam.name}
              />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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

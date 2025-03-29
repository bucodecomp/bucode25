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
        "Meet the brilliant minds behind BuCode! Learn about our team of organizers, problem setters, and developer who make the competition possible.",
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
    image: "./images/team/isil.jpg",
    links: {
      github: "https://www.github.com/isilsukarakuzuu",
      linkedin: "https://www.linkedin.com/in/isilsukarakuzu/",
      twitter: undefined,
    },
  },
  {
    name: "Tuğra Acar",
    subteam: subteams[0],
    bio: "Co-Director of BuCode",
    image: "/images/team/tugra.jpg",
    links: {
      github: undefined,
      linkedin: "https://www.linkedin.com/in/tu%C4%9Fra-acar-29b71322b/",
      twitter: undefined,
    },
  },
  {
    name: "Ümit Can Evleksiz",
    subteam: subteams[2],
    bio: "Design and Development Lead",
    image: "/images/team/umit.jpg",
    links: {
      github: "https://github.com/umitcan07",
      linkedin: "https://www.linkedin.com/in/umitcanevleksiz/",
      twitter: "https://twitter.com/ucedesign",
    },
  },
  {
    name: "Özgür Deniz Demir",
    subteam: subteams[2],
    bio: "Developer",
    image: "/images/team/deniz.jpg",
    links: {
      github: "https://github.com/odenizddd",
      linkedin: "https://www.linkedin.com/in/ozgur-deniz-demir/",
      twitter: undefined,
    },
  },
  {
    name: "Atakan Yaşar",
    subteam: subteams[1],
    bio: "Algorithm Team Lead",
    image: "/images/team/atakan.jpg",
    links: {
      github: "https://github.com/atakanyasar",
      linkedin: "https://www.linkedin.com/in/atakan-yasar/",
      twitter: undefined,
    },
  },
  {
    name: "Beyza Nur Deniz",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/beyza.jpg",
    links: {
      github: "https://github.com/beyzanurdeniz",
      linkedin: "https://www.linkedin.com/in/beyza-nur-deniz/",
      twitter: undefined,
    },
  },
  {
    name: "Berk Sel",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/berk.jpg",
    links: {
      github: "https://github.com/selbrk",
      linkedin: "https://www.linkedin.com/in/berk-sel",
      twitter: undefined,
    },
  },
  {
    name: "Fatih Solak",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/fatih.jpg",
    links: {
      github: undefined,
      linkedin: "https://www.linkedin.com/in/fatih-solak-72664a207/",
      twitter: undefined,
    },
  },
  {
    name: "Utku Çelik",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/utku.jpg",
    links: {
      github: "https://github.com/HutkuC",
      linkedin: "https://www.linkedin.com/in/halilutkucelik/",
      twitter: undefined,
    },
  },
  {
    name: "Yusuf Akın",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/yusuf.jpg",
    links: {
      github: undefined,
      linkedin: "https://www.linkedin.com/in/yusuf-akin-946641224/",
      twitter: undefined,
    },
  },
  {
    name: "Melih Akpınar",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/melih.jpg",
    links: {
      github: "https://github.com/melihakpinar",
      linkedin: "https://www.linkedin.com/in/melihakpinar/",
      twitter: undefined,
    },
  },
  {
    name: "Emin Ersüs",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/emin.jpg",
    links: {
      github: "https://github.com/eminersus",
      linkedin: "https://www.linkedin.com/in/eminersus/",
      twitter: undefined,
    },
  },
  {
    name: "Celaleddin Ömer Sağlam",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/omer.jpg",
    links: {
      github: "https://github.com/comersaglam",
      linkedin: "https://www.linkedin.com/in/celaleddin-omer-saglam",
      twitter: undefined,
    },
  },
  {
    name: "Ahmed Faruk Özgür",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/avatar.svg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Hakan Gökdoğan",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/avatar.svg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Şevket Onur Yılmaz",
    subteam: subteams[1],
    bio: "Problem Setter",
    image: "/images/team/avatar.svg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Damla Demirok",
    subteam: subteams[3],
    bio: "Event Organization",
    image: "/images/team/damla.jpg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Nil Zeren Doğan",
    subteam: subteams[3],
    bio: "Event Organization",
    image: "/images/team/nil_zeren.jpg",
    links: {
      github: "https://www.github.com/nilzerendogan",
      linkedin: "https://www.linkedin.com/in/nil-zeren-do%C4%9Fan-487584201/",
      twitter: undefined,
    },
  },
  {
    name: "Umut Efe Seki",
    subteam: subteams[3],
    bio: "Sponsorship",
    image: "/images/team/umut.jpg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Ömer Taha Örnek",
    subteam: subteams[3],
    bio: "Sponsorship",
    image: "/images/team/taha.jpg",
    links: {
      github: undefined,
      linkedin: undefined,
      twitter: undefined,
    },
  },
  {
    name: "Musa Kaan Güney",
    subteam: subteams[3],
    bio: "Event Organization",
    image: "/images/team/avatar.svg",
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

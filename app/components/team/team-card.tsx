import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { cva } from "cva";
import type { subteams } from "~/routes/team";

export type TeamMember = {
  name: string;
  subteam: (typeof subteams)[number];
  bio: string;
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const linkToIcon = {
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
  twitter: RiTwitterXFill,
};

export const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="rounded-[12px] bg-transparent p-1 text-center ring ring-white/4">
      <div className="relative flex flex-col items-center gap-6 rounded-[8px] bg-ocean-50/50 p-6 ring ring-white/8">
        <div className="absolute inset-0 flex h-full w-full items-start justify-center">
          <CardBG />
        </div>
        <div className="relative flex h-20 w-20 justify-start overflow-hidden rounded-[6px] bg-ocean-50 ring ring-white/12 ring-offset-2 ring-offset-ocean-50">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover text-xs"
          />
          <span
            className="absolute inset-0 rounded-[6px]"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.24)",
            }}
          />
        </div>
        <div className="relative flex flex-col items-center gap-3">
          <TeamBadge subteam={member.subteam} />
          <div>
            <h3 className="text-balance font-medium text-lg">{member.name}</h3>
            <p className="text-balance font-sans text-ocean-950/85 text-sm leading-6 tracking-sm">
              {member.bio}
            </p>
          </div>
          <ul className="flex gap-3">
            {Object.entries(member.links)
              .sort(([key1], [key2]) => {
                return key1 < key2 ? -1 : 1;
              })
              .map(([key, value]) => {
                const Icon = linkToIcon[key as keyof typeof linkToIcon];
                if (!value) return null;
                return (
                  <li key={key}>
                    <a
                      href={value}
                      className="flex items-center justify-center p-1 text-ocean-950/50 transition-colors hover:text-ocean-1000"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const teamBadge = cva(
  "rounded-[6px] bg-ocean-50 px-[11px] pt-[2px] pb-[5px] font-medium text-xs ring",
  {
    variants: {
      subteam: {
        Lead: "ring-forest-500/12 text-forest-700",
        Algo: "ring-blue-500/12 text-blue-500",
        Dev: "ring-orange-500/12 text-orange-500",
        Org: "ring-purple-500/12 text-purple-500",
      },
    },
  },
);

const TeamBadge = ({ subteam }: { subteam: (typeof subteams)[number] }) => {
  return (
    <div
      className={teamBadge({
        subteam: subteam.label,
      })}
    >
      <span className="font-bold font-display text-xs uppercase leading-4 tracking-5xl">
        {subteam.label}
      </span>
    </div>
  );
};

const CardBG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex h-full w-full"
      fill="none"
      viewBox="0 0 344 303"
    >
      <title>Team Card Background</title>
      <g clip-path="url(#a)">
        <path
          stroke="url(#b)"
          d="M4.5-100.5h-24v24m24-24v24m0-24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m96-336h24m-24 0v24m0-24h-24m48 0v24m0-24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m120-312h24m-24 0v24m0-24h-24m48 0v24m0-24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m120-312h24m-24 0v24m0-24h-24m48 0v24m0-24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m24 72h24m-24 0v24m0-24v-24m0 24h-24m48 0v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m-240-264h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m120-312h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m144-288h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m144-288h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m-240-264h-24m24 0h24m-24 96h-24m24 0h24m-24 96h-24m24 0h24m-24 96h-24m24 0v24m0-24h24m-48 0v24h24m96-312h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m144-288h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m144-288h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0h24m-48 0h-24m48 96h-24m24 0v24m0-24h24m-48 0v24m0-24h-24m-240 24h24m72 0h-24m24 0h24m-48 0h-24m144 0h-24m24 0h24m-48 0h-24m144 0h-24m24 0h24m-48 0h-24m-216-384h24m-24 0v24m24-24v24m0 0h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m96-336h24m-24 0v24m24-24v24m0 0h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m96-336h24m-24 0v24m24-24v24m0 0h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 48h-24m24 0v24m-24-24v24m96-336h24m-24 0v24m24-24v24m0-24h24v24m-24 0h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m0 48h24m-24 0v24m0-24v-24m24 24v24m0-24v-24m0 24h24m-24 24h-24m24 0v24m0-24h24m-48 0v24m-264-288h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m120-312h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m120-312h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m24 72h-24m24 0v24m-24-24v24m120-312h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m24 72h-24m24 0v24m0-24h24m-48 0v24m-264-288h-24m24 96h-24m24 96h-24m24 96h-24m24 0v24m-24-24v24m120-312h-24m24 96h-24m24 96h-24m24 96h-24m24 0v24m-24-24v24m120-312h-24m24 96h-24m24 96h-24m24 96h-24m24 0v24m-24-24v24m120-312h-24m24 0h24m-24 96h-24m24 0h24m-24 96h-24m24 0h24m-24 96h-24m24 0v24m0-24h24m-48 0v24m-264 0h-24m120 0h-24m120 0h-24m120 0h-24m24 0h24v-24m0-336v24m0 48v24m0-24v-24m0 48v24m0 48v24m0-24v-24m0 48v24m0 48v24m0-24v-24m0 48v24m0-288v24m0 72v24m0 72v24m0 72v24"
          opacity=".02"
        />
        <path stroke="url(#c)" d="M268.5-4.5v48h-72" opacity=".06" />
        <path stroke="url(#d)" d="M172.5 19.5v48h-96v24h-99" opacity=".06" />
        <path stroke="url(#e)" d="M148.5 43.5h-48v-129" opacity=".06" />
        <path stroke="url(#f)" d="M364 139.5h-96v-48h-71.5" opacity=".06" />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 192 -192 0 172 92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity=".4" />
          <stop offset=".333" stop-color="#fff" />
          <stop offset=".667" stop-color="#fff" stop-opacity=".2" />

          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-36.074 174.435 -306.204) scale(180.017 488.457)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(174.472 89.859 38.417) scale(249.158 47.5789)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-47.49978 -65.00014 76.15484 -55.65124 147.5 44)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(186.50008 68.50006 -84.6454 230.45782 204 92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <clipPath id="a">
          <rect width="344" height="303" fill="#fff" rx="6" />
        </clipPath>
      </defs>
    </svg>
  );
};

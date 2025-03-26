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

export const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="rounded-3 bg-transparent p-2 ring ring-white/4">
      <div>
        <img src={member.image} alt={member.name} />
      </div>
    </div>
  );
};

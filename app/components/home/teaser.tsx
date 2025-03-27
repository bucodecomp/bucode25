import { RiArrowRightLine, RiRocketLine } from "@remixicon/react";
import { Link } from "react-router";
import { Vibration, primaryButton, secondaryButton } from "../button";
import { SectionHead } from "../section-head";

const TeaserCard = ({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="before-[''] relative flex flex-col gap-2 pb-6 pl-5 before:absolute before:top-0 before:left-0 before:h-18 before:w-[1px] before:bg-[linear-gradient(to_bottom,_rgb(99,140,164,1.0),_rgb(99,140,164,0.0))] before:bg-blue-500 before:bg-transparent">
      <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2">
        <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
        <h3 className="font-display font-semibold text-2xl text-white leading-8 tracking-[-0.01em]">
          {title}
        </h3>
      </div>
      <p className="max-w-[90%] text-[#7494AF] text-sm leading-6">
        {description}
      </p>
    </div>
  );
};

export const Teaser = () => {
  return (
    <section>
      <div className="container mx-auto max-w-screen-2xl flex flex-col items-start gap-20 px-10 py-[120px]">
        <SectionHead
          label="Why BuCode?"
          title="Tried and True"
          description="Hundreds have already tasted the thrill of BuCode. Become a part of the family and build friendships stronger than a linked list."
          align="start"
        />
        <div className="flex w-full flex-col items-center gap-10">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-y-0">
            <TeaserCard
              title="250+ Participants"
              description="A union of people who stay awake until 4 AM debugging - just like you."
              icon={<RiRocketLine size={24} />}
            />
            <TeaserCard
              title="122 Teams"
              description="A unique chance to find the co-founder of your next startup here."
              icon={<RiRocketLine size={24} />}
            />
            <TeaserCard
              title="17 Universities"
              description="A melting pot for diverse academic cultures to connect and collaborate."
              icon={<RiRocketLine size={24} />}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              to="/about"
              className={`${primaryButton({ size: "md" })} w-fit`}
            >
              <span>BuCode 2024 Recap</span>
              <RiArrowRightLine className="-mr-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

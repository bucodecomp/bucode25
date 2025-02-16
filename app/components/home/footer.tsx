import { Link } from "react-router";

const columns = [
  {
    title: "Contest",
    links: [
      {
        text: "About",
        href: "#",
      },
      {
        text: "FAQ",
        href: "#",
      },
      {
        text: "Prizes",
        href: "#",
      },
      {
        text: "Sponsors",
        href: "#",
      },
      {
        text: "BuCode 2024",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        text: "Affiliations",
        href: "#",
      },
      {
        text: "Security",
        href: "#",
      },
    ],
  },
  {
    title: "Team",
    links: [
      {
        text: "About Us",
        href: "#",
      },
      {
        text: "Apply BuCode",
        href: "#",
      },
    ],
  },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-3">
      <h6 className="font-display text-[#7494AF] text-base uppercase leading-[1.125rem] tracking-5xl">
        {title}
      </h6>
      <ul className="flex flex-col gap-4 font-sans text-[#AFC9DE] text-sm leading-6">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="w-full px-6 py-20">
      <div className="border-white/4 border-y-[1px] px-0 py-10 sm:px-8 md:px-24">
        <div className="flex flex-col gap-16 px-4 py-6 sm:flex-row sm:gap-8">
          <Link to="/" className="flex flex-1 justify-start">
            <svg
              width={105}
              height={24}
              className="h-6 w-auto text-ocean-800 transition-colors hover:text-ocean-600"
            >
              <title>Bucode Logo</title>
              <use href="#bucode-logo" />
            </svg>
          </Link>
          {columns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>
      </div>
      <div className="px-0 sm:px-8 md:px-24">
        <div className="flex flex-col gap-4 px-4 py-6">
          <p className="font-sans text-[#AFC9DE] text-xs leading-6">
            © 2025 BuCode. All rights reserved
          </p>
          <p className="max-w-5xl font-sans text-[#7494AF] text-xs leading-6">
            BuCode and its organizing committee strive to provide the most
            accurate and up-to-date information regarding the competition on
            this website. However, we reserve the right to make adjustments to
            the competition rules, schedule, and other related content without
            prior notice, as deemed necessary for the smooth conduct and
            integrity of the event.
            <br />
            BuCode is not responsible for any inconvenience or loss caused by
            such changes. All decisions made by the competition judges and
            organizers are final.
            <br />
            <br />
            By participating in BuCode, competitors agree to abide by all the
            rules and regulations set forth by the organizers. BuCode respects
            your privacy and is committed to protecting your personal
            information. For more details on our privacy policy and terms of
            use, please visit Data Privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

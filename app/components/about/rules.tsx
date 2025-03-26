import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { SectionHead } from "../section-head";

export const linkClass =
  "text-ocean-925 hover:text-white transition-colors duration-300";

const content = {
  general: {
    title: "General",
    paragraphs: [
      <>
        BuCode is an algorithm competition organized by Boğaziçi University
        Computer Engineering Students in collaboration with COMPEC. All
        university students eager to dive into the world of algorithms can
        participate and compete alongside the most ambitious minds in the field.
      </>,
      <>
        To advance to the Final Round, your team needs to successfully complete
        the 12-hour online Qualification Round. The top 15 teams will receive
        invitations to the final competition at Boğaziçi University South
        Campus, with the competition lasting for a total of 16 hours. Both
        competitions will take place on{" "}
        <Link className={linkClass} to="https://algoleague.com">
          algoleague
        </Link>{" "}
        and will adhere to ICPC rules.
      </>,
    ],
  },
  ocp: {
    title: "Official Competition Path",
    paragraphs: [
      <>
        The online qualification round is on February 17th at{" "}
        <Link
          key="algoleague-link"
          className={linkClass}
          to="https://algoleague.com/contest/bucode-bogazici-algorithm-competition-2024-qualification-round/description"
        >
          algoleague.
        </Link>{" "}
        Your team has 12 hours (12:00 pm to 12:00 am) to solve 10-12 questions.
      </>,
      <Fragment key="clarifications">
        You will have the opportunity to seek clarifications from our technical
        team.
      </Fragment>,
      <Fragment key="qualification">
        Based on the qualification results, the first 15 teams which has the
        qualification criteria will qualify to participate in the final round.
      </Fragment>,
      <Fragment key="results">
        Results will be announced on February 20th.
      </Fragment>,
      <Fragment key="final">
        The final round is scheduled to take place at Boğaziçi University South
        Campus on March 2.{" "}
        <Link className={linkClass} to="https://algoleague.com">
          algoleague
        </Link>{" "}
        platform will once again be used during the competition.
      </Fragment>,
      <Fragment key="final-round">
        In the final, your team will strive to solve 10-12 questions within a
        16-hour period. It will start at 6:00 pm on March 2 and conclude at
        10:00 am on March 3.
      </Fragment>,
      <Fragment key="awards">
        The top five teams will be honored with awards during the ceremony
        following the competition.
      </Fragment>,
    ],
  },
  pr: {
    title: "Participation Rules",
    paragraphs: [
      <Fragment key="eligibility">
        Contestants must be currently enrolled in a bachelor's or associate's
        degree program in Turkey.
      </Fragment>,
      <Fragment key="algoleague">
        All participants are required to have an{" "}
        <Link className={linkClass} to="https://algoleague.com">
          algoleague
        </Link>{" "}
        account.
      </Fragment>,
      <Fragment key="teams">
        Teams can have a maximum of 3 members, or individuals can compete
        independently.
      </Fragment>,
      <Fragment key="universities">
        Team members may be from different universities.
      </Fragment>,
    ],
  },
  cr: {
    title: "Competition Rules",
    paragraphs: [
      <Fragment key="collaboration">
        Team members are required to collaborate exclusively with their
        teammates while solving the questions. Seeking assistance from
        individuals outside the team is strictly prohibited.
      </Fragment>,
      <Fragment key="plagiarism">
        While participants have the option to consult external sources,
        including web pages, it is expressly forbidden to copy and use any code.
        Plagiarism will be detected, and any such instance will result in the
        disqualification of the team.
      </Fragment>,
      <Fragment key="computers">
        Each team member is permitted to use their own computer throughout the
        competition.
      </Fragment>,
      <Fragment key="languages">
        Solutions can be submitted in one of the following programming
        languages: C, C#, C++, Java, JavaScript, and Python.
      </Fragment>,
    ],
  },
  qualification: {
    title: "Qualification Criteria for the Final Round",
    paragraphs: [
      <Fragment key="attendance">
        Finalists will be required to attend the competition in person. In the
        event that a qualifying team cannot attend physically, the opportunity
        will be passed on to the next eligible team.
      </Fragment>,
      <Fragment key="verification">
        As part of the qualification process, Final Round participants' student
        documents will be subject to verification.
      </Fragment>,
      <Fragment key="selection">
        The selection of finalists will be based on their performance during the
        online qualification round on{" "}
        <Link className={linkClass} to="https://algoleague.com">
          {" "}
          algoleague.
        </Link>{" "}
        Top-performing teams will advance to the final stage of the competition.
      </Fragment>,
    ],
  },
  practicing: {
    title: "Practicing for the Competition",
    paragraphs: [
      <Fragment key="practice">
        If you're looking to enhance your programming skills and prepare for the
        upcoming set, you can practice with problems of varying difficulty
        levels on{" "}
        <Link
          className={linkClass}
          to="https://www.algoleague.com/problem/list"
        >
          algoleague
        </Link>
      </Fragment>,
      <Fragment key="resources">
        Additionally, we recommend two free and open-source resources to help
        you prepare:{" "}
        <Link
          className={linkClass}
          to="https://github.com/inzva/Algorithm-Program"
        >
          {" "}
          Algorithm Program Bundles{" "}
        </Link>{" "}
        by Inzva and{" "}
        <Link className={linkClass} to="https://cses.fi/book/book.pdf">
          {" "}
          Competitive Programmers Handbook{" "}
        </Link>{" "}
        by Antti Laaksonen.
      </Fragment>,
      <Fragment key="problems">
        Or you can discover various problem sets from algoleague:{" "}
        <Link
          className={linkClass}
          to="https://www.algoleague.com/contest/algorithm-training-beginner-set/"
        >
          {" "}
          Beginner
        </Link>
        ,{" "}
        <Link
          className={linkClass}
          to="https://www.algoleague.com/contest/algorithm-training-intermediate-set/"
        >
          Intermediate
        </Link>
        ,{" "}
        <Link
          className={linkClass}
          to="https://www.algoleague.com/contest/algorithm-training-set-dynamic-programming-1"
        >
          Dynamic Programming
        </Link>
        , and{" "}
        <Link
          className={linkClass}
          to="https://www.algoleague.com/contest/algorithm-training-set-graph-1"
        >
          Graph
        </Link>
        .
      </Fragment>,
    ],
  },
};

const hClass = "font-display font-semibold text-4xl text-white mb-3";
const pClass = "font-sans text-lg leading-8 text-ocean-950/75";

export const Rules = () => {
  return (
    <div className="container mx-auto flex max-w-screen-2xl flex-col items-center px-12 py-40">
      <div className="flex w-full max-w-3xl flex-col items-center gap-20 md:gap-32">
        <SectionHead
          title="Knowledge Repository."
          description="Explore the essential information about the BuCode competition."
          align="center"
          label="ABOUT BUCODE"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-20">
            {Object.entries(content).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-3">
                <h2 className={hClass}>{section.title}</h2>
                <ul className="ml-4 flex list-disc flex-col gap-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <li key={`${key}-${index}`} className={pClass}>
                      {paragraph}
                    </li>
                  ))}
                </ul>
                {key === "pr" && (
                  <img
                    src="/images/tribute.png"
                    alt="Team"
                    className="rounded-[12px] object-cover"
                    height={480}
                    width={480 * 1.5}
                  />
                )}
              </div>
            ))}
          </div>
          <hr className="my-6 h-[1px] w-full border-none bg-[rgb(255,255,255,0.04)]" />
          <p className="text-ocean-925/50 text-sm">
            <span>
              Do you still have questions in your mind? Contact us at{" "}
            </span>
            <a className={linkClass} href="mailto:contact@bucodecomp.com">
              contact@bucodecomp.com{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

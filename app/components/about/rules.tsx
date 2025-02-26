import { SectionHead } from "../section-head";

const content = {
  general: {
    title: "General",
    p1: "BuCode is an algorithm competition organized by Boğaziçi University Computer Engineering Students in collaboration with COMPEC. All university students eager to dive into the world of algorithms can participate and compete alongside the most ambitious minds in the field.",
    p2: "To advance to the Final Round, your team needs to successfully complete the 12-hour online Qualification Round. The top 15 teams will receive invitations to the final competition at Boğaziçi University South Campus, with the competition lasting for a total of 16 hours. Both competitions will take place on <algoleague>algoleague</algoleague> and will adhere to ICPC rules.",
  },
  ocp: {
    title: "Official Competition Path",
    p1: "The online qualification round is on February 17th at <qual>algoleague.</qual> Your team has 12 hours (12:00 pm to 12:00 am) to solve 10-12 questions.",
    p2: "You will have the opportunity to seek clarifications from our technical team.",
    p3: "Based on the qualification results, the first 15 teams which has the qualification criteria will qualify to participate in the final round.",
    p4: "Results will be announced on February 20th.",
    p5: "The final round is scheduled to take place at Boğaziçi University South Campus on March 2. <algoleague>algoleague</algoleague> platform will once again be used during the competition.",
    p6: "In the final, your team will strive to solve 10-12 questions within a 16-hour period. It will start at 6:00 pm on March 2 and conclude at 10:00 am on March 3.",
    p7: "The top five teams will be honored with awards during the ceremony following the competition.",
  },
  pr: {
    title: "Participation Rules",
    p1: "Contestants must be currently enrolled in a bachelor’s or associate’s degree program in Turkey.",
    p2: "All participants are required to have an <algoleague>algoleague</algoleague> account.",
    p3: "Teams can have a maximum of 3 members, or individuals can compete independently.",
    p4: "Team members CAN be from DIFFERENT universities.",
  },
  cr: {
    title: "Competition Rules",
    p1: "Team members are required to collaborate exclusively with their teammates while solving the questions. Seeking assistance from individuals outside the team is strictly prohibited.",
    p2: "While participants have the option to consult external sources, including web pages, it is expressly forbidden to copy and use any code. Plagiarism will be detected, and any such instance will result in the disqualification of the team.",
    p3: "Each team member is permitted to use their own computer throughout the competition.",
    p4: "Solutions can be submitted in one of the following programming languages: C, C#, C++, Java, JavaScript, and Python.",
  },
  qualification: {
    title: "Qualification Criteria for the Final Round",
    p1: "Finalists will be required to attend the competition in person. In the event that a qualifying team cannot attend physically, the opportunity will be passed on to the next eligible team.",
    p2: "As part of the qualification process, Final Round participants' student documents will be subject to verification.",
    p3: "The selection of finalists will be based  on their performance during the online qualification round on <algoleague> algoleague.</algoleague> Top-performing teams will advance to the final stage of the competition.",
  },
  practicing: {
    title: "Practicing for the Competition",
    p1: "If you're looking to enhance your programming skills and prepare for the upcoming set, you can practice with problems of varying difficulty levels on <problems>algoleague</problems>",
    p2: "Additionally, we recommend two free and open-source resources to help you prepare: <bundle> Algorithm Program Bundles </bundle> by Inzva and <handbook> Competitive Programmers Handbook </handbook> by Antti Laaksonen.",
    p3: "Or you can discover various problem sets from algoleague: <beginner> Beginner</beginner>, <intermediate>Intermediate</intermediate>, <dp>Dynamic Programming</dp>, and <graph>Graph</graph>.",
  },
  contact: "Do you still have questions in your mind? Contact us at ",
};

const hClass = "font-display font-medium text-4xl text-white";
const pClass = "font-sans text-lg leading-8 text-ocean-925/75";

export const Rules = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-40 px-12">
      <div className="flex w-full max-w-3xl flex-col items-center gap-20 md:gap-32">
        <SectionHead
          title="Knowledge Repository."
          description="Explore the essential information about the BuCode competition."
          align="center"
          label="ABOUT BUCODE"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.general.title}</h2>
              <p className={pClass}>{content.general.p1}</p>
              <p className={pClass}>{content.general.p2}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.ocp.title}</h2>
              <ul className="ml-4 flex list-disc flex-col gap-4">
                <li className={pClass}>{content.ocp.p1}</li>
                <li className={pClass}>{content.ocp.p2}</li>
                <li className={pClass}>{content.ocp.p3}</li>
                <li className={pClass}>{content.ocp.p4}</li>
                <li className={pClass}>{content.ocp.p5}</li>
                <li className={pClass}>{content.ocp.p6}</li>
                <li className={pClass}>{content.ocp.p7}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.pr.title}</h2>
              <ul className="ml-4 flex list-disc flex-col gap-4">
                <li className={pClass}>{content.pr.p1}</li>
                <li className={pClass}>{content.pr.p2}</li>
                <li className={pClass}>{content.pr.p3}</li>
                <li className={pClass}>{content.pr.p4}</li>
              </ul>
            </div>
            <img
              src="/images/tribute.png"
              alt="Team"
              className="rounded-[12px] object-cover"
              height={480}
              width={480 * 1.5}
            />
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.cr.title}</h2>
              <ul className="ml-4 flex list-disc flex-col gap-4">
                <li className={pClass}>{content.cr.p1}</li>
                <li className={pClass}>{content.cr.p2}</li>
                <li className={pClass}>{content.cr.p3}</li>
                <li className={pClass}>{content.cr.p4}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.qualification.title}</h2>
              <ul className="ml-4 flex list-disc flex-col gap-4">
                <li className={pClass}>{content.qualification.p1}</li>
                <li className={pClass}>{content.qualification.p2}</li>
                <li className={pClass}>{content.qualification.p3}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={hClass}>{content.practicing.title}</h2>
              <ul className="ml-4 flex list-disc flex-col gap-4">
                <li className={pClass}>{content.practicing.p1}</li>
                <li className={pClass}>{content.practicing.p2}</li>
                <li className={pClass}>{content.practicing.p3}</li>
              </ul>
            </div>
          </div>
          <hr className="my-6 w-full border-none h-[1px] bg-[rgb(255,255,255,0.04)]" />
          <p className="text-ocean-925/50 text-sm">
            <span>{content.contact}</span>
            <a className="underline" href="mailto:contact@bucodecomp.com">
              contact@bucodecomp.com{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

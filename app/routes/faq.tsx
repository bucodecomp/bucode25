import type { JSX } from "react";
import { linkClass } from "~/components/about/rules";
import { FAQBlock } from "~/components/faq/faq-block";
import { Footer } from "~/components/home/footer";
import { Hero } from "~/components/home/hero";
import { ICTA } from "~/components/icta";
import { Navbar } from "~/components/navbar";
import { SectionHead } from "~/components/section-head";
import type { Route } from "./+types/home";

export function meta({ error }: Route.MetaArgs) {
  return [
    { title: "Contact BuCode" },
    {
      name: "description",
      content:
        "Get in touch with the organizers of BuCode. Have questions about rules, registration, or technical issues? Contact us for support and assistance!",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

const categories = ["Participation", "Competition"] as const;

const faq: Array<{
  category: (typeof categories)[number];
  questions: Array<{
    question: string;
    answer: JSX.Element;
  }>;
}> = [
  {
    category: "Participation",
    questions: [
      {
        question: "Who are eligible to participate?",
        answer: <>Anyone can participate.</>,
      },
      {
        question: "Is there a participation fee?",
        answer: <>No, there is no participation fee.</>,
      },
      {
        question: "How can I apply BuCode 25?",
        answer: (
          <>You can apply BuCode 25 by filling out the application form.</>
        ),
      },
      {
        question: "How many members does a team have?",
        answer: <>A team can have up to 3 members.</>,
      },
      {
        question: "Can I apply individually?",
        answer: <>Yes, you can apply individually.</>,
      },
    ],
  },
  {
    category: "Competition",
    questions: [
      {
        question: "How will the rounds be held?",
        answer: <>The rounds will be held online.</>,
      },
      {
        question: "Is there a participation fee?",
        answer: <>No, there is no participation fee.</>,
      },
      {
        question: "What are the prizes?",
        answer: <>The prizes will be announced later.</>,
      },
      {
        question: "What are the problems like?",
        answer: <>The problems will be announced later.</>,
      },
    ],
  },
];

export default function FAQ({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Navbar />
      <section className="py-48">
        <div className="container mx-auto flex max-w-screen-2xl flex-col items-center gap-16 px-4 md:px-10">
          <SectionHead
            title="No More Curiosities"
            label="FAQ"
            description="We're eager to clarify everything BuCode 25. Here are several questions you might be wondering."
            align="center"
          />
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="sticky top-40">
              <img
                src="/images/3d-logo.png"
                className="mix-blend-color-burn"
                alt="FAQ"
              />
            </div>
            <div className="flex flex-col gap-20">
              {faq.map(({ category, questions }) => (
                <div key={category} className="flex flex-col gap-6">
                  <header className="flex items-center gap-2">
                    <div className="flex w-12 items-center">
                      <span className="h-6 w-[1px] bg-gradient-to-b from-ocean-950/10 to-ocean-950/10" />
                      <span className="h-[1px] flex-1 bg-gradient-to-r from-ocean-950/10 to-ocean-950/20" />
                    </div>
                    <h3 className="font-medium text-2xl leading-9">
                      {category}
                    </h3>
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-ocean-950/20 to-ocean-950/0" />
                  </header>
                  <FAQBlock questions={questions} />
                </div>
              ))}
              <div className="flex flex-col gap-6">
                <hr className="h-[1px] w-full border-none bg-[rgb(255,255,255,0.04)]" />
                <div className="text-ocean-925/50 text-sm">
                  <span>
                    Do you still have questions in your mind? Contact us at{" "}
                  </span>
                  <a className={linkClass} href="mailto:contact@bucodecomp.com">
                    contact@bucodecomp.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ICTA />
      <Footer />
    </main>
  );
}

import * as A from "@radix-ui/react-accordion";

import "./styles.css";
import type { JSX } from "react";

export type FAQBlockProps = {
  questions: Array<{ question: string; answer: JSX.Element }>;
};

export const FAQBlock = ({ questions }: FAQBlockProps) => {
  return (
    <A.Root type="multiple" className="flex w-full flex-col gap-4">
      {questions.map((item) => (
        <A.Item key={item.question} value={item.question}>
          <A.Trigger className="AccordionTrigger spacey-2 flex w-full flex-col items-stretch px-5 py-4 text-start duration-100">
            <A.Header className="flex items-center gap-2 text-white">
              <span className="flex-1">{item.question}</span>
              <svg
                className="AccordionChevron"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Chevron</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.71967 9.96967C8.01256 9.67678 8.48744 9.67678 8.78033 9.96967L12 13.1893L15.2197 9.96967C15.5126 9.67678 15.9874 9.67678 16.2803 9.96967C16.5732 10.2626 16.5732 10.7374 16.2803 11.0303L12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L7.71967 11.0303C7.42678 10.7374 7.42678 10.2626 7.71967 9.96967Z"
                  fill="currentColor"
                />
              </svg>
            </A.Header>
            <A.Content className="AccordionContent text-ocean-950/70">
              <span className="pt-3 text-sm">{item.answer}</span>
            </A.Content>
          </A.Trigger>
        </A.Item>
      ))}
    </A.Root>
  );
};

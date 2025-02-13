import { SectionHead } from "../section-head";

export const Hero = () => {
  return (
    <div className="w-dvg h-dvh p-4 flex flex-col items-stretch">
      <div className="rounded-4xl bg-ocean-25 p-4 h-full w-full pt-24 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <SectionHead
            title="Best in class web design and development"
            description="We offer a wide range of services to help you grow your business."
            label="Our Services"
            align="center"
          />
        </div>
      </div>
    </div>
  );
};

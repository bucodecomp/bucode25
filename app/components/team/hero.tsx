import { SectionHead } from "../section-head";

export const TeamHero = () => {
  return (
    <section className="py-48">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center gap-16 px-4 md:px-10">
        <SectionHead
          title="Meet the Team"
          description="Get to know about the dedicated individuals, shaping the run of 2025 at BuCode Algorithm Competition."
          align="center"
          label="ABOUT BUCODE"
        />
      </div>
    </section>
  );
};

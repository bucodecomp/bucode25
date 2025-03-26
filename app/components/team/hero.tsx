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
        <div className="flex w-full max-w-3xl flex-col gap-10 sm:gap-12 md:gap-20 ">
          <div className="h-[1px] bg-gradient-to-l from-ocean-900/0 via-ocean-900/20 to-ocean-900/0" />

          <div
            className="relative w-full overflow-hidden rounded-xl ring ring-ocean-1000/10 ring-offset-2 ring-offset-ocean-100"
            style={{ aspectRatio: "768/400" }}
          >
            {/* Image with mask applied */}
            <img
              src="/images/tribute.png"
              alt="Tribute"
              className="absolute inset-0 h-full w-full scale-105 rounded-xl object-cover"
            />

            {/* <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="-1 -1 770 402"
              width="100%"
              height="100%"
            >
              <title>Borders</title>
              <mask
                id="gallery-mask"
                maskUnits="objectBoundingBox"
                viewBox="-1 -1 770 402"
                width="100%"
                height="100%"
              >
                <g fill="white" width="100%" height="100%">
                  <rect x="0" y="10%" width="30%" height="80%" />
                  <rect x="35%" y="0" width="30%" height="100%" />
                  <rect x="70%" y="10%" width="30%" height="80%" />
                </g>
              </mask>
              <g stroke="rgba(255, 255, 255, 0.1)" rx="8" fill="none">
                <rect x="0" y="48" width="240" height="304" />
                <rect x="256" y="0" width="256" height="400" />
                <rect x="528" y="48" width="240" height="304" />
              </g>
            </svg> */}
          </div>
          <div className="h-[1px] bg-gradient-to-l from-ocean-900/0 via-ocean-900/20 to-ocean-900/0" />
        </div>
      </div>
    </section>
  );
};

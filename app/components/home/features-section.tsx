import { SectionHead } from "../section-head";

const FeatureCard = ({ title, description, icon }: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <div className="flex-1 max-w-lg py-10 px-6 flex flex-col items-center gap-4">
            <div className="w-20 h-16 flex items-center justify-center border border-white/4 bg-linear-[180deg,#fff0,#ffffff0a] bg-[#091620]/2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-display font-semibold text-2xl leading-8 tracking-[-0.01em]">{title}</h1>
                <p className="leading-8 text-[#7494AF]">{description}</p>
            </div>
        </div>
    );
}

export const FeaturesSection = () => {
    return (
        <div className="container flex flex-col items-center gap-16 px-[105px] py-[120px]">
            <SectionHead 
                label="Why BuCode?"
                title="What To Expect..."
                description="As we get closer to the exciting moments, the countdown has started for the Qualification and Final Rounds. The big day is coming soon, don't miss it!"
                align="center"
            />
            <div className="w-full bg-[#255C8B]/2 border border-white/4 flex flex-col items-stretch lg:flex-row">
                <FeatureCard 
                    title="Thrilling Competition"
                    description="As we get closer to the exciting moments, the countdown has started."
                    icon={<svg width="20" height="20"><use href="#speedometer-icon"/></svg>}
                />
                <FeatureCard 
                    title="Rewarding Experience"
                    description="As we get closer to the exciting moments, the countdown has started."
                    icon={<svg width="20" height="20"><use href="#award-icon"/></svg>}
                />
                <FeatureCard 
                    title="Unforgettable Atmosphere"
                    description="As we get closer to the exciting moments, the countdown has started."
                    icon={<svg width="20" height="20"><use href="#rocket-icon"/></svg>}
                />
            </div>
        </div>
    );
};
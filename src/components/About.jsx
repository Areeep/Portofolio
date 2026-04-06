import TechStackCard from "./TechStackCard";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About({ content, lang, isDark }) {
	return (
		<section
			id="about"
			className="flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 pb-28 bg-background text-text space-y-8 sm:space-y-16"
		>
			<div className="space-y-6">
				<p className="tag text-sm sm:text-lg md:text-2xl text-primary font-medium font-heading">
					// {content[lang].aboutme}
				</p>
				<p className="tag-subtitle text-2xl sm:text-4xl lg:text-5xl font-body leading-snug">
					{content[lang].abouthead}
				</p>
			</div>

			<div className="space-y-8">
				<div className="space-y-4">
					<p className="thisme font-mono text-muted text-sm sm:text-lg md:text-2xl">
						{content[lang].thisisme}
					</p>
					<hr className="to-top border-t-2 border-muted/30" />
				</div>
				<div className="flex flex-col gap-8 sm:gap-16 lg:flex-row justify-between">
					<p className="split-text font-mono text-lg sm:text-2xl lg:w-1/2">
						{content[lang].intro}{" "}
						<span className="text-primary">Syariffullah</span>.
					</p>
					<div className="font-body text-sm sm:text-xl lg:w-1/2 text-muted space-y-6">
						<p className="about-detail">{content[lang].aboutp1}</p>
						<p className="about-detail">{content[lang].aboutp2}</p>
						<p className="about-detail">{content[lang].aboutp3}</p>
					</div>
				</div>
			</div>

			<div className="space-y-4 sm:space-y-8">
				<p className="split-text text-2xl sm:text-4xl lg:text-5xl font-bold font-heading">
					MY STACK
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<TechStackCard
						icon="/icons/javascript.svg"
						name="JavaScript"
						px="8"
						py="4"
					/>
					<TechStackCard
						icon="/icons/react.svg"
						name="React"
						px="8"
						py="4"
					/>
					<TechStackCard
						icon="/icons/tailwind.svg"
						name="Tailwind CSS"
						px="8"
						py="4"
					/>
					<TechStackCard
						icon="/icons/gsap.svg"
						name="GSAP"
						px="8"
						py="4"
					/>
					<TechStackCard
						icon="/icons/figma.svg"
						name="Figma"
						px="8"
						py="4"
					/>
					<TechStackCard
						icon={
							isDark ? "/icons/github-white.svg" : "/icons/github-black.svg"
						}
						name="Github"
						px="8"
						py="4"
					/>
				</div>
			</div>
		</section>
	);
}

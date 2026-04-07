import TechStackCard from "./TechStackCard";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About({ content, lang, isDark }) {
	const sectionRef = useRef(null);
	const tagRef = useRef(null);
	const mainFocusRef = useRef(null);
	const thismeRef = useRef(null);
	const lineRef = useRef(null);
	const introRef = useRef(null);
	const detailRefs = useRef([]);
	const stackTitleRef = useRef(null);
	const stackGridRef = useRef(null);

	useGSAP(
		() => {
			let cancelled = false;

			let mainSplit;
			let introSplit;
			let stackTitleSplit;

			const initAnimation = async () => {
				if (document.fonts?.status !== "loaded") {
					await document.fonts.ready;
				}

				if (
					cancelled ||
					!tagRef.current ||
					!mainFocusRef.current ||
					!thismeRef.current ||
					!lineRef.current ||
					!introRef.current ||
					!stackTitleRef.current ||
					!stackGridRef.current
				) {
					return;
				}

				// split texts
				mainSplit = new SplitText(mainFocusRef.current, {
					type: "lines",
					linesClass: "split-line",
				});

				introSplit = new SplitText(introRef.current, {
					type: "words",
					wordsClass: "split-word",
				});

				stackTitleSplit = new SplitText(stackTitleRef.current, {
					type: "lines",
					linesClass: "split-line",
				});

				// =========================
				// 1) TAG
				// =========================
				gsap.from(tagRef.current, {
					x: -40,
					opacity: 0,
					duration: 0.7,
					ease: "power2.out",
					scrollTrigger: {
						trigger: tagRef.current,
						start: "top 50%",
						// toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 2) ABOUT HEAD
				// =========================
				gsap.from(mainSplit.lines, {
					yPercent: 100,
					opacity: 0,
					duration: 0.9,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: mainFocusRef.current,
						start: "top 52%",
						toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 3) THIS IS ME
				// =========================
				gsap.from(thismeRef.current, {
					y: 25,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: thismeRef.current,
						start: "top 85%",
						toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 4) LINE
				// =========================
				gsap.from(lineRef.current, {
					scaleX: 0,
					opacity: 0,
					transformOrigin: "left center",
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: lineRef.current,
						start: "top 90%",
						toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 5) INTRO WORD BY WORD
				// =========================
				gsap.from(introSplit.words, {
					y: 20,
					opacity: 0,
					duration: 0.5,
					stagger: 0.04,
					ease: "power2.out",
					scrollTrigger: {
						trigger: introRef.current,
						start: "top 82%",
						toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 6) ABOUT DETAIL PARAGRAPHS
				// =========================
				gsap.from(detailRefs.current, {
					y: 30,
					opacity: 0,
					duration: 0.8,
					stagger: 0.18,
					ease: "power2.out",
					scrollTrigger: {
						trigger: detailRefs.current[0],
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				});

				// =========================
				// 7) STACK TITLE
				// =========================
				gsap.from(stackTitleSplit.lines, {
					yPercent: 100,
					opacity: 0,
					duration: 0.8,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: stackTitleRef.current,
						start: "top 82%",
						toggleActions: "play reverse play reverse",
					},
				});

				// =========================
				// 8) STACK CARDS
				// =========================
				const cards = stackGridRef.current.children;

				gsap.from(cards, {
					y: 40,
					opacity: 0,
					duration: 0.7,
					stagger: 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: stackGridRef.current,
						start: "top 85%",
						toggleActions: "play reverse play reverse",
					},
				});

				ScrollTrigger.refresh();
			};

			initAnimation();

			return () => {
				cancelled = true;

				if (mainSplit) mainSplit.revert();
				if (introSplit) introSplit.revert();
				if (stackTitleSplit) stackTitleSplit.revert();
			};
		},
		{
			scope: sectionRef,
			dependencies: [lang],
			revertOnUpdate: true,
		},
	);

	return (
		<section
			id="about"
			className="flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 pb-28 bg-background text-text space-y-8 sm:space-y-16"
			ref={sectionRef}
		>
			<div className="space-y-6">
				<p
					className="text-sm sm:text-lg md:text-2xl text-primary font-medium font-heading"
					ref={tagRef}
				>
					// {content[lang].aboutme}
				</p>

				<p
					key={`main-${lang}`}
					className="text-2xl sm:text-4xl lg:text-5xl font-body leading-snug"
					ref={mainFocusRef}
				>
					{content[lang].abouthead}
				</p>
			</div>

			<div className="space-y-8">
				<div className="space-y-4">
					<p
						key={`thisme-${lang}`}
						ref={thismeRef}
						className="font-mono text-muted text-sm sm:text-lg md:text-2xl"
					>
						{content[lang].thisisme}
					</p>

					<hr
						ref={lineRef}
						className="border-t-2 border-muted/30"
					/>
				</div>

				<div className="flex flex-col gap-8 sm:gap-16 lg:flex-row justify-between">
					<p
						key={`intro-${lang}`}
						ref={introRef}
						className="font-mono text-lg sm:text-2xl lg:w-1/2"
					>
						{content[lang].intro}{" "}
						<span className="text-primary">Syariffullah</span>.
					</p>

					<div className="font-body text-sm sm:text-xl lg:w-1/2 text-muted space-y-6">
						<p ref={(el) => (detailRefs.current[0] = el)}>
							{content[lang].aboutp1}
						</p>
						<p ref={(el) => (detailRefs.current[1] = el)}>
							{content[lang].aboutp2}
						</p>
						<p ref={(el) => (detailRefs.current[2] = el)}>
							{content[lang].aboutp3}
						</p>
					</div>
				</div>
			</div>

			<div className="space-y-4 sm:space-y-8">
				<p
					key={`stack-${lang}`}
					ref={stackTitleRef}
					className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading"
				>
					MY STACK
				</p>

				<div
					ref={stackGridRef}
					className="grid grid-cols-1 sm:grid-cols-3 gap-4"
				>
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

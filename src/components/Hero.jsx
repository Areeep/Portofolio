import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export default function Hero({ content, lang, timeStr }) {
	useGSAP(() => {
		const nameSplit = new SplitText(".name", { type: "chars" });
		const subtitleSplit = new SplitText(".subtitle", { type: "lines" });

		gsap.from(".role", {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
			delay: 0.5,
		});

		gsap.from(nameSplit.chars, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
		});

		gsap.from(subtitleSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
			delay: 1,
		});

		gsap.from(".timer", {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
			delay: 1.3,
		});
	}, []);

	return (
		<section className="min-h-screen h-dvh flex flex-col justify-between px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 lg:py-36 xl:py-36 bg-background overflow-hidden">
			<div className="space-y-3 sm:space-y-5">
				<p className="role font-heading text-primary font-medium text-xl sm:text-3xl">
					Frontend Developer
				</p>
				<p className="name font-heading font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-text">
					SYARIFFULLAH
				</p>
				<p className="subtitle font-body md:text-2xl text-muted max-w-[30ch] sm:max-w-[35ch]">
					{content[lang].hero}
				</p>
			</div>
			<p className="timer font-mono text-muted text-right mt-auto text-sm sm:text-base">
				Pontianak, Indonesia - {timeStr} {content[lang].timezone}
			</p>
		</section>
	);
}

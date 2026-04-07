import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText);

export default function Hero({ content, lang, timeStr }) {
	const sectionRef = useRef(null);
	const roleRef = useRef(null);
	const nameRef = useRef(null);
	const subtitleRef = useRef(null);
	const timerRef = useRef(null);

	const [fontsReady, setFontsReady] = useState(false);

	// Tunggu font selesai load
	useEffect(() => {
		let mounted = true;

		const waitFonts = async () => {
			if (document.fonts?.status !== "loaded") {
				await document.fonts.ready;
			}

			// sedikit delay supaya layout benar-benar settle
			await new Promise((resolve) => setTimeout(resolve, 50));

			if (mounted) {
				setFontsReady(true);
			}
		};

		waitFonts();

		return () => {
			mounted = false;
		};
	}, []);

	useGSAP(
		() => {
			// jangan jalan kalau font belum siap
			if (!fontsReady) return;

			const nameSplit = new SplitText(nameRef.current, { type: "chars" });
			const subtitleSplit = new SplitText(subtitleRef.current, {
				type: "lines",
				linesClass: "split-line",
			});

			gsap.from(roleRef.current, {
				opacity: 0,
				yPercent: 100,
				duration: 1.8,
				ease: "expo.out",
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
				stagger: 0.08,
				delay: 1,
			});

			gsap.from(timerRef.current, {
				opacity: 0,
				yPercent: 100,
				duration: 1.8,
				ease: "expo.out",
				delay: 1.3,
			});

			return () => {
				nameSplit.revert();
				subtitleSplit.revert();
			};
		},
		{
			scope: sectionRef,
			dependencies: [fontsReady, lang],
			revertOnUpdate: true,
		},
	);

	return (
		<section
			ref={sectionRef}
			className="min-h-screen h-dvh flex flex-col justify-between px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 lg:py-36 xl:py-36 bg-background overflow-hidden"
		>
			<div className="space-y-3 sm:space-y-5">
				<p
					ref={roleRef}
					className="font-heading text-primary font-medium text-xl sm:text-3xl"
				>
					Frontend Developer
				</p>

				<p
					ref={nameRef}
					className="font-heading font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-text"
				>
					SYARIFFULLAH
				</p>

				<p
					ref={subtitleRef}
					className="font-body md:text-2xl text-muted max-w-[30ch] sm:max-w-[35ch]"
				>
					{content[lang].hero}
				</p>
			</div>

			<p
				ref={timerRef}
				className="font-mono text-muted text-right mt-auto text-sm sm:text-base"
			>
				Pontianak, Indonesia - {timeStr} {content[lang].timezone}
			</p>
		</section>
	);
}

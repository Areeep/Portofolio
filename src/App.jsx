import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TechStackCard from "./components/TechStackCard";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
	const [time, setTime] = useState(new Date());
	const [lang, setLang] = useState("en");
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const timeStr = time.toLocaleTimeString("id-ID", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	const content = {
		en: {
			hero: "I build responsive, user-focused web interfaces that balance function with visual clarity.",
			timezone: "(UTC +7)",
			aboutme: "About me",
			abouthead: (
				<>
					I prioritize a <span className="text-primary">user-focused</span>{" "}
					approach, making sure every project I develop is aligned with the
					unique needs of its users.
				</>
			),
			thisisme: "This is me.",
			intro: "Hi, I'm",
			aboutp1:
				"I am passionate about building responsive and user-friendly applications. I enjoy turning ideas into real, functional solutions that solve real-world problems.",
			aboutp2:
				"My journey started from a simple curiosity about how Discord bots work, which grew into a deeper focus on frontend development. I also have an interest in web design and motion design, but I mainly focus on bringing interfaces to life through code.",
			aboutp3:
				"I’m always eager to learn new technologies and take on challenges that help me grow as a developer.",
		},
		id: {
			hero: "Membangun tampilan web yang responsif dan berorientasi pengguna, dengan tampilan yang jelas dan fungsional.",
			timezone: "WIB",
			aboutme: "Tentang Aku",
			abouthead: (
				<>
					Mengutamakan <span className="text-primary">kebutuhan pengguna</span>,
					agar setiap project yang dikembangkan sesuai dengan kebutuhan mereka.
				</>
			),
			thisisme: "Ini aku.",
			intro: "Halo, Aku",
			aboutp1:
				"Aku suka membangun aplikasi responsif dan mudah digunakan. Aku menikmati proses mengubah ide menjadi solusi digital yang benar-benar bisa dipakai.",
			aboutp2: (
				<>
					Awalnya aku penasaran gimana bot Discord bisa bekerja. Dari situ, aku
					mulai semakin tertarik ke dunia <em>frontend</em>. Aku juga menyukai
					<em> web design</em> dan <em>web animation</em>, tetapi fokus utamaku
					saat ini adalah membangun tampilan yang hidup, fungsional, dan terasa
					nyaman saat digunakan.
				</>
			),
			aboutp3:
				"Aku selalu tertarik untuk belajar hal baru dan terbuka pada tantangan yang bisa membantuku berkembang sebagai developer.",
		},
	};

	return (
		<>
			<Navbar
				lang={lang}
				setLang={setLang}
				isDark={isDark}
				setIsDark={setIsDark}
			/>

			<ScrollProgressBar />

			{/* Hero Section */}
			<section className="h-dvh flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 lg:py-36 xl:py-36 bg-background">
				<div className="space-y-5">
					<p className="font-heading text-primary font-medium text-xl sm:text-3xl">
						Frontend Developer
					</p>
					<p className="font-heading font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-text">
						SYARIFFULLAH
					</p>
					<p className="font-body md:text-2xl text-muted max-w-[30ch] sm:max-w-[35ch]">
						{content[lang].hero}
					</p>
				</div>
				<p className="font-mono text-muted mt-auto text-right text-xs sm:text-base">
					Pontianak, Indonesia - {timeStr} {content[lang].timezone}
				</p>
			</section>

			<section
				id="about"
				className="flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 bg-background text-text space-y-8 sm:space-y-16"
			>
				<div className="space-y-6">
					<p className="text-xs sm:text-lg md:text-2xl text-primary font-medium font-heading">
						// {content[lang].aboutme}
					</p>
					<p className="text-2xl sm:text-4xl lg:text-5xl font-body leading-snug">
						{content[lang].abouthead}
					</p>
				</div>

				<div className="space-y-8">
					<div className="space-y-4">
						<p className="font-mono text-muted text-xs sm:text-lg md:text-2xl">
							{content[lang].thisisme}
						</p>
						<hr className="border-t-2 border-muted/30" />
					</div>
					<div className="flex flex-col gap-8 sm:gap-16 lg:flex-row justify-between">
						<p className="font-mono text-xs sm:text-2xl lg:w-1/2">
							{content[lang].intro}{" "}
							<span className="text-primary">Syariffullah</span>.
						</p>
						<div className="font-body text-xs sm:text-xl lg:w-1/2 text-muted space-y-6">
							<p>{content[lang].aboutp1}</p>
							<p>{content[lang].aboutp2}</p>
							<p>{content[lang].aboutp3}</p>
						</div>
					</div>
				</div>

				<div className="space-y-4 sm:space-y-8">
					<p className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading">
						MY STACK
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<TechStackCard
							icon="public/icons/javascript.svg"
							name="JavaScript"
						/>
						<TechStackCard
							icon="public/icons/react.svg"
							name="React"
						/>
						<TechStackCard
							icon="public/icons/tailwind.svg"
							name="Tailwind CSS"
						/>
						<TechStackCard
							icon="public/icons/gsap.svg"
							name="GSAP"
						/>
						<TechStackCard
							icon="public/icons/figma.svg"
							name="Figma"
						/>
						<TechStackCard
							icon={
								isDark
									? "public/icons/github-black.svg"
									: "public/icons/github-white.svg"
							}
							name="Github"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;

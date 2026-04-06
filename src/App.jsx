import "./App.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStackCard from "./components/TechStackCard";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	const [time, setTime] = useState(new Date());
	const [lang, setLang] = useState(() => {
		return localStorage.getItem("lang") || "id";
	});
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem("theme");
		if (saved === "light") {
			document.body.classList.add("light");
		}
		return saved === "dark" || saved === null;
	});

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

	useEffect(() => {
		window.history.replaceState(null, "", window.location.pathname);
	}, []);

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
			exp: "My Experiences",
			present: "Present",
			project: "Selected Projects",
		},
		id: {
			hero: "Membangun tampilan web yang responsif dan berorientasi pengguna yang fungsional.",
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
			exp: "Pengalaman",
			present: "Sekarang",
			project: "Daftar Proyek",
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
			<Hero
				lang={lang}
				content={content}
				timeStr={timeStr}
			/>

			{/* About Section */}
			<section
				id="about"
				className="flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 pb-28 bg-background text-text space-y-8 sm:space-y-16"
			>
				<div className="space-y-6">
					<p className="text-sm sm:text-lg md:text-2xl text-primary font-medium font-heading">
						// {content[lang].aboutme}
					</p>
					<p className="text-2xl sm:text-4xl lg:text-5xl font-body leading-snug">
						{content[lang].abouthead}
					</p>
				</div>

				<div className="space-y-8">
					<div className="space-y-4">
						<p className="font-mono text-muted text-sm sm:text-lg md:text-2xl">
							{content[lang].thisisme}
						</p>
						<hr className="border-t-2 border-muted/30" />
					</div>
					<div className="flex flex-col gap-8 sm:gap-16 lg:flex-row justify-between">
						<p className="font-mono text-lg sm:text-2xl lg:w-1/2">
							{content[lang].intro}{" "}
							<span className="text-primary">Syariffullah</span>.
						</p>
						<div className="font-body text-sm sm:text-xl lg:w-1/2 text-muted space-y-6">
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

			{/* Experience Section */}
			<section
				id="experiences"
				className="px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 bg-background text-text space-y-4 sm:space-y-16"
			>
				<p className="text-sm sm:text-lg md:text-2xl text-primary font-medium font-heading">
					// {content[lang].exp}
				</p>
				<div className="space-y-2">
					<a
						href="https://www.instagram.com/upapk2.untan/"
						target="_blank"
						className="font-body sm:text-2xl hover:underline"
					>
						UPA PKK Tanjungpura University
					</a>
					<p className="font-heading text-primary font-bold text-3xl sm:text-4xl">
						SOFTWARE ENGINEER (FRONTEND)
					</p>
					<p className="font-body sm:text-xl">
						Jan 2025 - {content[lang].present}
					</p>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 bg-background text-text space-y-6 sm:space-y-16"
			>
				<p className="text-sm sm:text-lg md:text-2xl text-primary font-medium font-heading">
					// {content[lang].project}
				</p>

				<p className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading">
					FEATURED WORK
				</p>

				<ProjectCard
					tags="Web App, Process Improvement"
					lang={lang}
					translations={{
						en: {
							title:
								"Redesigning an Outdated Attendance System into a Modern Web Platform",
							desc: "Rebuilt the existing attendance system to better align with user needs, improving usability, system structure, and overall efficiency within the organization.",
						},
						id: {
							title: "Redesain Sistem Absensi Lama Menjadi Platform Web Modern",
							desc: "Membangun ulang sistem absensi lama agar lebih sesuai dengan kebutuhan pengguna, sekaligus membuat alur sistemnya lebih rapi, mudah digunakan, dan efisien.",
						},
					}}
					icons={[
						{ src: "/icons/figma.svg", alt: "Figma" },
						{ src: "/icons/react.svg", alt: "React" },
						{ src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
					]}
					imgSrc="/placeholder.png"
					imgAlt="Project-img"
					// metrics={{
					// 	en: [
					// 		{ value: "user experience", label: "Better" },
					// 		{ value: "DATA MANAGEMENT", label: "More Efficient" },
					// 	],
					// 	id: [
					// 		{ value: "lebih baik", label: "Pengalaman" },
					// 		{ value: "lebih efisien", label: "Manajemen Data" },
					// 	],
					// }}
					icon="/icons/figma.svg"
					name="Figma"
				/>
				<ProjectCard
					tags="Web App, Digital Printing"
					lang={lang}
					translations={{
						en: {
							title:
								"Transforming Manual Printing Orders into a Seamless Digital Experience",
							desc: "A web-based solution that transforms manual printing orders into a more efficient, organized, and user-friendly digital workflow.",
						},
						id: {
							title: "Sistem Digital Printing Berbasis Web",
							desc: "Aplikasi berbasis web yang dirancang untuk mengubah proses pemesanan printing manual menjadi alur digital yang lebih praktis, terstruktur, dan mudah digunakan.",
						},
					}}
					icons={[
						{ src: "/icons/figma.svg", alt: "Figma" },
						{ src: "/icons/javascript.svg", alt: "JavaScript" },
						{ src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
					]}
					imgSrc="/placeholder.png"
					imgAlt="Project-img"
					// metrics={{
					// 	en: [
					// 		{ value: "WORKFLOW EFFICIENCY", label: "Improved" },
					// 		{ value: "MANUAL ERRORS", label: "Reduced" },
					// 	],
					// 	id: [
					// 		{ value: "Meningkat", label: "Efisiensi Alur Kerja" },
					// 		{ value: "kesalahan manual", label: "Mengurangi" },
					// 	],
					// }}
				/>
			</section>

			{/* Footer */}
			<Footer lang={lang} />
		</>
	);
}

export default App;

import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import TechStackCard from "./TechStackCard";
import Footer from "./Footer";
import Tooltip from "./Tooltip";
import ScrollProgressBar from "./ScrollProgressBar";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function CaseStudy() {
	const { slug } = useParams();
	const lang = localStorage.getItem("lang") || "id";

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme"); // "dark" | "light"
		if (savedTheme === "light") {
			document.body.classList.add("light");
		} else {
			document.body.classList.remove("light");
		}
	}, []);

	const project = projects[slug];
	if (!project) return <p>Project tidak ditemukan.</p>;

	const data = project[lang] ?? project.id;

	return (
		<main className="relative bg-background">
			{/* <Navbar lang={lang} /> */}
			<ScrollProgressBar />

			<div
				className="h-dvh bg-cover bg-center bg-no-repeat relative px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 text-text flex flex-col items-end"
				style={{ backgroundImage: `url("${project.imgSrc}")` }}
			>
				<div className="absolute inset-0 bg-linear-to-t from-background to-transparent h-full" />{" "}
				<div className="relative z-10 h-full w-full flex flex-col justify-end pb-10 space-y-2">
					<p className="font-mono text-primary">{project.tags}</p>
					<p className="text-3xl sm:text-5xl lg:text-7xl font-heading font-bold max-w-[20ch] leading-tight">
						{data.title}
					</p>
					<p className="font-body text-muted text-base sm:text-lg lg:text-xl max-w-[40ch]">
						{data.desc ?? project.en?.desc}
					</p>
				</div>
			</div>

			<section className="px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 text-text flex flex-col sm:flex-row gap-28">
				<div className="sm:max-w-[20%] sm:sticky top-8 self-start space-y-4 grid grid-cols-2 gap-y-4 sm:block">
					<div>
						<h5 className="font-mono text-primary font-medium text-xl md:text-2xl">
							Role
						</h5>
						<p className="font-heading font-medium md:text-xl">
							{project.role}
						</p>
					</div>
					<div>
						<h6 className="font-mono text-primary font-medium text-xl md:text-2xl">
							Team
						</h6>
						<p className="font-heading font-medium md:text-xl">
							{project.team}
						</p>
					</div>
					<div>
						<h6 className="font-mono text-primary font-medium text-xl md:text-2xl">
							Duration
						</h6>
						<p className="font-heading font-medium md:text-xl">
							{project.duration} {lang === "en" ? "Months" : "Bulan"}
						</p>
					</div>
					<div>
						<h6 className="font-mono text-primary font-medium text-xl md:text-2xl">
							Instance
						</h6>
						<p className="font-heading font-medium md:text-xl">
							{project.instance}
						</p>
					</div>
					<div className="flex gap-2">
						{project.techs?.map((tech) => (
							<div
								key={tech.key}
								className="relative group cursor-pointer"
							>
								<img
									src={tech.src}
									alt={tech.alt}
									className="w-5 h-5"
								/>
								<Tooltip content={tech.alt} />
							</div>
						))}
					</div>
				</div>
				<div className="sm:w-[70%] text-text text-lg space-y-12 font-body">
					<div className="space-y-4">
						<h4 className="text-3xl font-heading font-bold">The Problem</h4>
						<p className="text-muted leading-relaxed text-base md:text-lg">
							{data.problem}
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="text-3xl font-heading font-bold">What I Did</h4>
						<p className="text-muted text-base md:text-lg">{data.whatidid}</p>
						<ul className="text-muted md:text-lg">
							{data.whatidid2?.map((list, index) => (
								<li
									key={index}
									className="flex gap-2 items-center text-base md:text-lg"
								>
									<svg
										className="w-7 h-7 md:w-10 md:h-10 text-primary"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
										/>
									</svg>
									{list}
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-3xl font-heading font-bold">After</h4>
						<p className="text-muted text-base md:text-lg">{data.after}</p>
					</div>
				</div>
			</section>

			<Footer lang={lang} />
		</main>
	);
}

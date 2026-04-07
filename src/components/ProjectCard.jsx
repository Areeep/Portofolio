import TechStackCard from "./TechStackCard";
import { useState, useRef, useCallback } from "react";

export default function ProjectCard({
	tags,
	translations,
	imgSrc,
	imgAlt,
	lang,
	// metrics,
	icons,
	href,
}) {
	const { title, desc } = translations[lang] ?? translations["id"];
	// const metricList = metrics?.[lang] ?? metrics?.["id"] ?? [];

	const tooltipRef = useRef(null);
	const rafRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const handleMouseMove = useCallback((e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left + 16;
		const y = e.clientY - rect.top + 16;

		if (rafRef.current) cancelAnimationFrame(rafRef.current);

		rafRef.current = requestAnimationFrame(() => {
			if (tooltipRef.current) {
				tooltipRef.current.style.left = `${x}px`;
				tooltipRef.current.style.top = `${y}px`;
			}
		});
	}, []);

	const handleMouseLeave = () => {
		setIsVisible(false);
	};

	const handleMouseEnter = () => {
		setIsVisible(true);
	};

	return (
		<a
			href={href}
			target="_blank"
			className="relative flex flex-col-reverse lg:flex-row lg:items-stretch bg-card rounded-2xl border border-muted/20 hover:border-primary/40 hover:-translate-y-1 transition-[transform,border,box-shadow,translate] duration-500 hover:shadow-lg "
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
		>
			{/* Tooltip */}
			<span
				ref={tooltipRef}
				className={`pointer-events-none absolute z-50 bg-primary text-background font-mono text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${isVisible ? "opacity-100" : "opacity-0"}`}
			>
				{lang === "en" ? "View Study Case" : "Lihat Studi Kasus"}
			</span>

			<div className="flex flex-col justify-around p-4 sm:p-8 md:p-12 xl:p-16 lg:w-1/2 space-y-10">
				<div className="space-y-4">
					<p className="font-mono text-primary text-xs sm:text-md md:text-lg lg:text-sm">
						{tags}
					</p>
					<p className="text-xl sm:text-3xl xl:text-4xl font-heading font-bold leading-tight">
						{title}
					</p>
					<p className="font-body text-muted text-xs sm:text-lg lg:text-sm xl:text-lg">
						{desc}
					</p>
					<div className="flex gap-4 mt-6">
						{icons.map((icon, index) => {
							return (
								<TechStackCard
									key={icon.alt || icon.src || index}
									icon={icon.src}
									name={icon.alt}
									project
								/>
							);
						})}
					</div>
				</div>

				<div className="space-y-6">
					{/* <div className="flex font-body gap-4 sm:gap-12 lg:gap-8 items-center">
						{metricList.map((m) => (
							<div
								key={m.label}
								className="flex flex-col gap-2"
							>
								<p className="text-muted font-medium sm:text-xl">{m.label}</p>
								<p className="font-bold font-heading uppercase sm:text-2xl">
									{m.value}
								</p>
							</div>
						))}
					</div> */}

					<span
						href="#"
						className="group flex w-fit gap-2 hover:underline font-mono uppercase font-medium text-xs sm:text-lg md:text-lg lg:text-md items-center hover:text-primary"
					>
						{lang === "en" ? "View Study Case" : "Lihat Studi Kasus"}
						<svg
							className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</div>
			</div>
			<img
				className="h-full max-h-52 sm:h-full sm:max-h-90 lg:max-h-300 lg:self-strech lg:h-auto xl:max-h-155 lg:w-1/2 rounded-t-2xl lg:rounded-br-2xl lg:rounded-tl-none object-cover "
				src={imgSrc}
				alt={imgAlt}
			/>
		</a>
	);
}

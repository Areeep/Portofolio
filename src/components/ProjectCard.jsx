export default function ProjectCard({
	tags,
	translations,
	imgSrc,
	imgAlt,
	lang,
	icons = [],
	metrics,
}) {
	const { title, desc } = translations[lang] ?? translations["id"];
	const metricList = metrics?.[lang] ?? metrics?.["id"] ?? [];

	return (
		<div className="flex flex-col-reverse lg:flex-row lg:items-stretch bg-card rounded-2xl border border-muted/20">
			<div className="flex flex-col justify-around p-4 sm:p-8 md:p-16 lg:w-1/2 space-y-10">
				<div className="space-y-4">
					<p className="font-mono text-primary text-xs sm:text-xl">{tags}</p>
					<p className="text-xl sm:text-4xl font-heading font-bold leading-tight">
						{title}
					</p>
					<p className="font-body text-muted text-xs sm:text-xl">{desc}</p>
					<div className="flex gap-4">
						{icons.map((icon) => {
							return (
								<img
									key={icon.alt}
									className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
									src={icon.src}
									alt={icon.alt}
								/>
							);
						})}
					</div>
				</div>

				<div className="space-y-6">
					<div className="flex font-body gap-4 sm:gap-12 lg:gap-8 items-center">
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
					</div>

					<a
						href="#"
						className="flex gap-2 hover:underline font-mono uppercase font-medium text-xs sm:text-lg md:text-xl items-center hover:text-primary"
					>
						{lang === "en" ? "View Study Case" : "Lihat Studi Kasus"}
						<svg
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<img
				className="h-52 sm:h-96 lg:h-auto lg:w-1/2 rounded-t-2xl lg:rounded-br-2xl lg:rounded-tl-none object-cover "
				src={imgSrc}
				alt={imgAlt}
			/>
		</div>
	);
}

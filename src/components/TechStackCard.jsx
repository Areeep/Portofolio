export default function TechStackCard({ icon, name, px, py, project }) {
	return (
		<div
			className={`flex font-heading px-${px} py-${py} items-center cursor-default ${project ? "gap-2 xl:px-4 xl:py-2 xl:bg-white/5 rounded-full" : "gap-4"}`}
		>
			<img
				className={
					project
						? "w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 object-contain"
						: "w-6 h-6 object-contain sm:w-8 sm:h-8"
				}
				src={icon}
				alt={name}
			/>
			<p className={project ? "text-xs" : "text-md md:text-xl"}>{name}</p>
		</div>
	);
}

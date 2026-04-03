export default function TechStackCard({ icon, name }) {
	return (
		<div className="flex gap-4 font-heading px-8 py-4 items-center">
			<img
				className="w-6 h-6 object-contain sm:w-8 sm:h-8"
				src={icon}
				alt="name"
			/>
			<p className="text-md md:text-xl">{name}</p>
		</div>
	);
}

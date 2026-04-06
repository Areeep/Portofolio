export default function Tooltip({ content }) {
	return (
		<>
			<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
				{content}
			</span>
		</>
	);
}

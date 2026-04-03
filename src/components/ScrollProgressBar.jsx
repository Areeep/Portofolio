import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const percent = (scrollTop / docHeight) * 100;
			setProgress(percent);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed right-[3%] top-1/2 -translate-y-1/2 w-1.5 h-25 bg-muted/20 rounded-full z-">
			<div
				className="w-full h-full bg-primary transition-all duration-75 rounded-full"
				style={{ height: `${progress}%` }}
			></div>
		</div>
	);
}

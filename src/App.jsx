import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
	const [time, setTime] = useState(new Date());

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
	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className="h-dvh flex flex-col px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-28 lg:py-36 xl:py-36 bg-background">
				<div className="space-y-5">
					<p className="font-heading text-amber-500 font-medium text-xl sm:text-3xl">
						Frontend Developer
					</p>
					<p className="font-heading font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
						SYARIFFULLAH
					</p>
					<p className="font-body sm:text-2xl text-muted max-w-[26ch]">
						I turn ideas into structured, functional, and user-friendly web
						applications.
					</p>
				</div>
				<p className="font-mono text-muted mt-auto text-right text-xs sm:text-base">
					Pontianak, Indonesia - {timeStr} (UTC +7)
				</p>
			</section>
		</>
	);
}

export default App;

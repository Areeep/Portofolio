import { useState } from "react";
import ThemeButton from "./ThemeButton";

export default function Navbar({ lang, setLang, isDark, setIsDark }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleLang = () => {
		const newLang = lang === "en" ? "id" : "en";
		setLang(newLang);
		localStorage.setItem("lang", newLang);
	};

	const navContent = {
		en: { about: "About", experiences: "Experiences", projects: "Projects" },
		id: { about: "Tentang", experiences: "Pengalaman", projects: "Proyek" },
	};

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 flex justify-between px-4 py-4 sm:px-8 md:px-16 md:py-6 font-heading items-center backdrop-blur-sm bg-background/80 z-50">
				<a
					href="#"
					className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl"
				>
					S
				</a>
				<ul className="hidden sm:flex sm:gap-6 md:gap-8 text-muted lg:text-xl ">
					<li>
						<a href="#about">{navContent[lang].about}</a>
					</li>
					<li>
						<a href="#experiences">{navContent[lang].experiences}</a>
					</li>
					<li>
						<a href="#projects">{navContent[lang].projects}</a>
					</li>
				</ul>
				<div className="hidden sm:flex sm:gap-4 md:gap-6">
					<button onClick={toggleLang}>
						<svg
							className="w-7 h-7 lg:w-8 lg:h-8 text-text"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m20.58 19.37l-2.99-8.36c-.21-.55-.68-.89-1.22-.89s-1 .34-1.23.91l-2.98 8.34a.75.75 0 1 0 1.41.51l.62-1.73h4.35l.62 1.73c.11.31.4.5.71.5c.08 0 .17-.01.25-.04a.75.75 0 0 0 .45-.96Zm-5.84-2.73l1.64-4.59l1.64 4.59zm-2.55-8.79c-2.26 3.57-4.3 5.73-6.78 7.17a.746.746 0 0 1-1.02-.27a.74.74 0 0 1 .27-1.02c2.1-1.22 3.82-2.97 5.75-5.87H4.12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.75V4.38c0-.41.34-.75.75-.75s.75.34.75.75v1.98h3.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.94Zm.04 7.27c-.13 0-.26-.03-.38-.1c-.65-.38-1.28-.8-1.87-1.24a.75.75 0 0 1 .9-1.2c.54.41 1.13.79 1.73 1.14a.752.752 0 0 1-.38 1.4"
							/>
						</svg>
					</button>
					<ThemeButton
						isDark={isDark}
						setIsDark={setIsDark}
					/>
				</div>

				<button
					className="sm:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="w-6 h-6 text-text"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				{isOpen && (
					<div className="sm:hidden absolute top-full left-0 w-full backdrop-blur-sm bg-background px-8 py-6 flex flex-col gap-4 z-50">
						<ul className="flex flex-col gap-4 text-muted">
							<li>
								<a href="#about">{navContent[lang].about}</a>
							</li>
							<li>
								<a href="#experiences">{navContent[lang].experiences}</a>
							</li>
							<li>
								<a href="#projects">{navContent[lang].projects}</a>
							</li>
						</ul>
						<div className="flex gap-2">
							<button onClick={toggleLang}>
								<svg
									className="w-5 h-5 text-text"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="m20.58 19.37l-2.99-8.36c-.21-.55-.68-.89-1.22-.89s-1 .34-1.23.91l-2.98 8.34a.75.75 0 1 0 1.41.51l.62-1.73h4.35l.62 1.73c.11.31.4.5.71.5c.08 0 .17-.01.25-.04a.75.75 0 0 0 .45-.96Zm-5.84-2.73l1.64-4.59l1.64 4.59zm-2.55-8.79c-2.26 3.57-4.3 5.73-6.78 7.17a.746.746 0 0 1-1.02-.27a.74.74 0 0 1 .27-1.02c2.1-1.22 3.82-2.97 5.75-5.87H4.12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.75V4.38c0-.41.34-.75.75-.75s.75.34.75.75v1.98h3.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.94Zm.04 7.27c-.13 0-.26-.03-.38-.1c-.65-.38-1.28-.8-1.87-1.24a.75.75 0 0 1 .9-1.2c.54.41 1.13.79 1.73 1.14a.752.752 0 0 1-.38 1.4"
									/>
								</svg>
							</button>
							<ThemeButton
								isDark={isDark}
								setIsDark={setIsDark}
							/>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}

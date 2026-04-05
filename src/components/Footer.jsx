export default function Footer({ lang }) {
	return (
		<footer className="flex flex-col sm:flex-row px-8 sm:px-20 md:px-24 lg:px-20 xl:px-36 py-4 lg:py-16 bg-background text-text space-y-4 sm:space-y-16 font-body items-center">
			<p className="text-primary text-2xl sm:text-3xl lg:text-4xl font-heading font-bold sm:mb-0">
				{lang === "en" ? "Contact Me." : "Kontak Saya."}
			</p>
			<div className="flex flex-col items-center sm:items-end gap-4 flex-1">
				<div className="flex gap-2">
					<a
						href="tel:+62 896-9052-1039"
						className="hover:text-primary relative group"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								fill="none"
								fill-rule="evenodd"
							>
								<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
								<path
									fill="currentColor"
									d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
								/>
							</g>
						</svg>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
							+62 896-9052-1039
						</span>
					</a>
					<a
						href="https://mail.google.com/mail/?view=cm&to=syariffullah0911@gmail.com"
						className="hover:text-primary relative group"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
							/>
						</svg>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
							syariffullah0911@gmail.com
						</span>
					</a>
					<a
						href="www.linkedin.com/in/syariffullah"
						className="hover:text-primary relative group"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
							/>
						</svg>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
							in/syariffullah
						</span>
					</a>
					<a
						href="https://github.com/Areeep"
						target="_blank"
						rel="noreferrer"
						className="hover:text-primary relative group"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
							/>
						</svg>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
							github.com/Areeep
						</span>
					</a>
					<a
						href="https://www.instagram.com/areeplh/"
						target="_blank"
						rel="noreferrer"
						className="hover:text-primary relative group"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
							/>
						</svg>
						<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-muted/20 text-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-medium">
							@areeplh
						</span>
					</a>
				</div>
				<p className="text-right text-xs text-muted md:text-lg">
					&copy; 2026 Syariffullah. All rights reserved
				</p>
			</div>
		</footer>
	);
}

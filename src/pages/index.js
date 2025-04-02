import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
	FiChevronDown,
	FiGithub,
	FiLinkedin,
	FiMail,
	FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBoltLightning,
	faBook,
	faMedal,
	faCode,
	faBriefcase,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const router = useRouter();
	const [headerText, setHeaderText] = useState("");
	const [fadeImageIn, setFadeImageIn] = useState(false);
	const nameText = "Devin Briscall";
	const descriptionText = "Full Stack Developer";
	const tempTextRef = useRef("");
	const bioRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => {
		if (!router.isReady) return;
		setFadeImageIn(true);

		let index = 0;

		// Typing effect logic
		const typeLetter = () => {
			if (index < descriptionText.length) {
				tempTextRef.current += descriptionText[index];
				setHeaderText(tempTextRef.current);
				index++;
				setTimeout(typeLetter, 50);
			}
		};

		// Start typing
		typeLetter();
	}, [router.isReady]);

	const handleScroll = (ref) => {
		if (ref.current) {
			const targetPosition =
				ref.current.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: targetPosition - 68,
				behavior: "smooth",
			});
		}
	};

	return (
		<Page noPadding>
			{/* Hero section */}
			<div className="h-screenMinusNavbar flex flex-col p-6 box-border bg-gradient-to-b from-offwhite to-offwhite dark:from-charcoal dark:to-charcoal">
				<div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
					{/* Profile Image */}
					<div
						className={`rounded-full relative hover:scale-105 w-[280px] h-[280px] transition-all duration-1000 ${
							fadeImageIn ? "opacity-100 transform-gpu" : "opacity-0"
						}`}
					>
						<Image
							alt="Devin Briscall - Web Developer"
							src="/images/profile.png"
							className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
							fill={true}
							quality={100}
							priority
						/>
					</div>

					{/* Hero Text */}
					<div className="text-center md:text-left">
						<h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-3 text-charcoal dark:text-offwhite">
							{nameText}
						</h1>
						<p className="text-xl md:text-2xl mb-6 text-charcoal dark:text-offwhite">
							{headerText || "D"}
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-wrap gap-4 justify-center md:justify-start">
							<button
								onClick={() => handleScroll(projectsRef)}
								className="bg-secondary hover:bg-secondary/80 text-offwhite font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md"
							>
								View Projects
								<FiArrowRight className="ml-2 inline" />
							</button>
							<button
								onClick={() => handleScroll(contactRef)}
								className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
							>
								Contact Me
							</button>
						</div>

						{/* Social Links */}
						<div className="flex gap-6 mt-8 justify-center md:justify-start">
							<a
								href="https://github.com/"
								target="_blank"
								rel="noreferrer"
								className="text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300"
							>
								<FiGithub size={24} />
							</a>
							<a
								href="https://linkedin.com/"
								target="_blank"
								rel="noreferrer"
								className="text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300"
							>
								<FiLinkedin size={24} />
							</a>
							<a
								href="mailto:contact@example.com"
								className="text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300"
							>
								<FiMail size={24} />
							</a>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div
					className="flex flex-col items-center animate-bounce hover:cursor-pointer mt-10"
					onClick={() => handleScroll(projectsRef)}
				>
					<span className="font-medium text-charcoal dark:text-offwhite mb-2">
						Explore My Work
					</span>
					<FiChevronDown size={28} className="text-secondary" />
				</div>
			</div>

			{/* Page divider */}
			<div className="h-1 bg-secondary"></div>

			{/* Projects Section */}
			<div
				ref={projectsRef}
				className="min-h-screenMinusNavbar box-border py-20 flex flex-col justify-between items-center bg-offwhite dark:bg-charcoal"
			>
				{/* Section header */}
				<div className="mb-12 text-center">
					<span className="text-secondary font-medium uppercase tracking-wider">
						What I've Built
					</span>
					<h2 className="font-bold text-3xl md:text-4xl mt-2 text-charcoal dark:text-offwhite">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
					<p className="max-w-2xl mx-auto text-charcoal dark:text-offwhite">
						A selection of my recent work, showcasing my skills in web
						development and problem-solving.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="w-full h-full md:w-[85vw] lg:w-[80vw] p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<ProjectCard
						projectName="SUS Contracting"
						description="A responsive website for a construction company featuring project showcases, service descriptions, and contact forms."
						tags={[
							"React",
							"Next.js",
							"HTML",
							"JS",
							"CSS",
							"Strapi",
							"Tailwind",
						]}
						emphasizedTags={["Team Lead"]}
						imageSrc="/images/sus.png"
						imgContain
						href="/projects/sus-contracting"
					/>

					<ProjectCard
						projectName="WMBA"
						description="A comprehensive baseball scorekeeping application with real-time statistics, team management, and tournament scheduling."
						tags={[
							"C#",
							".NET",
							"EF Core",
							"JSON",
							"JS",
							"JQuery",
							"Bootstrap",
						]}
						emphasizedTags={["Community Project Winner"]}
						href="/projects/wmba"
						imageSrc="/images/wmba/logo/logo.jpg"
					/>

					<ProjectCard
						projectName="Contoso Data Analysis"
						description="An interactive PowerBI dashboard providing detailed sales analytics and forecasting for Contoso Retailers (2007-2009)."
						tags={["PowerBI", "Data Analysis", "Data Warehousing"]}
						href="/projects/contoso"
						imageSrc="/images/contoso/contoso.jpg"
					/>
				</div>

				{/* View More Button */}
				<Link
					className="bg-secondary hover:bg-secondary/80 text-offwhite font-medium rounded-full py-3 px-8 hover:scale-105 transition-all duration-300 mt-12 shadow-md flex items-center"
					href={"/projects"}
				>
					View All Projects
					<FiArrowRight className="ml-2" />
				</Link>
			</div>

			{/* Skills Section */}
			<div
				ref={skillsRef}
				className="py-20 px-6 bg-offwhite dark:bg-charcoal border-t border-charcoal/10 dark:border-offwhite/10"
			>
				{/* Section header */}
				<div className="text-center mb-16">
					<span className="text-secondary font-medium uppercase tracking-wider">
						My Expertise
					</span>
					<h2 className="font-bold text-3xl md:text-4xl mt-2 text-charcoal dark:text-offwhite">
						Technical Skills
					</h2>
					<div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
				</div>

				{/* Skills Grid */}
				<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Skill Category: Frontend */}
					<div className="bg-offwhite dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 border-secondary transition-all duration-300 hover:-translate-y-2">
						<div className="mb-4 text-secondary">
							<FontAwesomeIcon icon={faCode} className="w-10 h-10" />
						</div>
						<h3 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
							Frontend
						</h3>
						<ul className="space-y-3 text-charcoal dark:text-offwhite">
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								React / Next.js
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								JavaScript / TypeScript
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								HTML5 / CSS3
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Tailwind / Bootstrap
							</li>
						</ul>
					</div>

					{/* Skill Category: Backend */}
					<div className="bg-offwhite dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 border-secondary transition-all duration-300 hover:-translate-y-2">
						<div className="mb-4 text-secondary">
							<FontAwesomeIcon icon={faCode} className="w-10 h-10" />
						</div>
						<h3 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
							Backend
						</h3>
						<ul className="space-y-3 text-charcoal dark:text-offwhite">
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								C# / .NET
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Node.js
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								SQL / EF Core
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								RESTful APIs
							</li>
						</ul>
					</div>

					{/* Skill Category: Tools */}
					<div className="bg-offwhite dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 border-secondary transition-all duration-300 hover:-translate-y-2">
						<div className="mb-4 text-secondary">
							<FontAwesomeIcon icon={faBriefcase} className="w-10 h-10" />
						</div>
						<h3 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
							Tools
						</h3>
						<ul className="space-y-3 text-charcoal dark:text-offwhite">
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Git / GitHub
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								VS Code / Visual Studio
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								PowerBI
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Strapi CMS
							</li>
						</ul>
					</div>

					{/* Skill Category: Soft Skills */}
					<div className="bg-offwhite dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 border-secondary transition-all duration-300 hover:-translate-y-2">
						<div className="mb-4 text-secondary">
							<FontAwesomeIcon icon={faGraduationCap} className="w-10 h-10" />
						</div>
						<h3 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
							Soft Skills
						</h3>
						<ul className="space-y-3 text-charcoal dark:text-offwhite">
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Team Leadership
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Problem Solving
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Client Communication
							</li>
							<li className="flex items-center">
								<span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
								Project Management
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bio / Mission Statement */}
			<div
				ref={bioRef}
				className="relative py-20 px-6 flex flex-col justify-center gap-12 items-center bg-offwhite dark:bg-charcoal border-t border-charcoal/10 dark:border-offwhite/10"
			>
				{/* Section header */}
				<div className="text-center mb-4">
					<span className="text-secondary font-medium uppercase tracking-wider">
						About Me
					</span>
					<h2 className="font-bold text-3xl md:text-4xl mt-2 text-charcoal dark:text-offwhite">
						Who I Am
					</h2>
					<div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
				</div>

				{/* Biography */}
				<section className="max-w-4xl bg-white dark:bg-charcoal p-8 rounded-lg shadow-md border border-charcoal/10 dark:border-offwhite/10">
					<div className="mx-auto">
						<p className="text-lg text-charcoal dark:text-offwhite mb-6">
							I am a{" "}
							<strong className="text-secondary">
								Web Development Team Lead
							</strong>{" "}
							at a non-profit organization, guiding a team of four in building
							websites for local businesses. My skills in React, JavaScript,
							SQL, and C# enable me to develop efficient solutions that meet
							clients' needs.
						</p>
						<p className="text-charcoal dark:text-offwhite">
							Recently, I created an app for a restaurant owner to streamline
							supplier communication and price comparison, reinforcing my
							commitment to solving real-world problems. I am also enrolled in
							the
							<strong className="text-secondary">
								{" "}
								Computer Programming and Analysis Co-op program at Niagara
								College
							</strong>
							, maintaining a{" "}
							<strong className="text-secondary">97% GPA</strong> across four
							completed terms. Outside of work, I'm a self-taught musician in
							piano, drums, and guitar, reflecting my passion for continuous
							learning.
						</p>
					</div>
				</section>

				{/* Mission */}
				<section className="max-w-5xl mt-8">
					<h3 className="font-bold text-2xl mb-10 text-center text-charcoal dark:text-offwhite">
						My Mission
					</h3>
					<div className="grid sm:grid-cols-3 gap-8">
						<div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 hover:-translate-y-2 border border-charcoal/10 dark:border-offwhite/10">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
								<FontAwesomeIcon icon={faBook} className="w-8 h-8" />
							</div>
							<h4 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
								Continuous Learning
							</h4>
							<p className="text-charcoal dark:text-offwhite">
								Expanding my knowledge drives creativity and helps me build
								adaptable, impactful applications.
							</p>
						</div>

						<div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 hover:-translate-y-2 border border-charcoal/10 dark:border-offwhite/10">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
								<FontAwesomeIcon icon={faBoltLightning} className="w-8 h-8" />
							</div>
							<h4 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
								Empower Through Efficiency
							</h4>
							<p className="text-charcoal dark:text-offwhite">
								I strive to simplify processes, enhancing productivity so people
								can focus on what matters most.
							</p>
						</div>

						<div className="bg-white dark:bg-charcoal p-8 rounded-lg shadow-md hover:shadow-lg text-center transition-all duration-300 hover:-translate-y-2 border border-charcoal/10 dark:border-offwhite/10">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
								<FontAwesomeIcon icon={faMedal} className="w-8 h-8" />
							</div>
							<h4 className="font-bold text-xl mb-4 text-charcoal dark:text-offwhite">
								Create Quality
							</h4>
							<p className="text-charcoal dark:text-offwhite">
								I perform best in environments with autonomy, allowing deep
								focus and high-quality results.
							</p>
						</div>
					</div>
				</section>
			</div>

			{/* Contact Section */}
			<div
				ref={contactRef}
				className="py-20 px-6 bg-white dark:bg-charcoal border-t border-charcoal/10 dark:border-offwhite/10"
			>
				{/* Section header */}
				<div className="text-center mb-12">
					<span className="text-secondary font-medium uppercase tracking-wider">
						Get In Touch
					</span>
					<h2 className="font-bold text-3xl md:text-4xl mt-2 text-charcoal dark:text-offwhite">
						Contact Me
					</h2>
					<div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
					<p className="max-w-2xl mx-auto text-charcoal dark:text-offwhite">
						Interested in working together? Have a question about my projects?
						I'd love to hear from you!
					</p>
				</div>

				{/* Contact Form */}
				<div className="max-w-3xl mx-auto bg-offwhite dark:bg-charcoal rounded-lg shadow-md p-8 border border-charcoal/10 dark:border-offwhite/10">
					<form className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-charcoal dark:text-offwhite mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full px-4 py-3 border border-charcoal/20 dark:border-offwhite/20 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-offwhite dark:bg-charcoal text-charcoal dark:text-offwhite"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-charcoal dark:text-offwhite mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full px-4 py-3 border border-charcoal/20 dark:border-offwhite/20 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-offwhite dark:bg-charcoal text-charcoal dark:text-offwhite"
									required
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-medium text-charcoal dark:text-offwhite mb-2"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="w-full px-4 py-3 border border-charcoal/20 dark:border-offwhite/20 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-offwhite dark:bg-charcoal text-charcoal dark:text-offwhite"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-charcoal dark:text-offwhite mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								className="w-full px-4 py-3 border border-charcoal/20 dark:border-offwhite/20 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-offwhite dark:bg-charcoal text-charcoal dark:text-offwhite"
								required
							></textarea>
						</div>
						<div>
							<button
								type="submit"
								className="w-full bg-secondary hover:bg-secondary/80 text-offwhite font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>

				{/* Alternative Contact Methods */}
				<div className="mt-16 text-center">
					<p className="text-charcoal dark:text-offwhite mb-6 font-medium">
						Prefer to connect on social media?
					</p>
					<div className="flex gap-10 justify-center">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noreferrer"
							className="flex flex-col items-center text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300 group"
						>
							<div className="p-4 rounded-full bg-white dark:bg-charcoal border border-charcoal/10 dark:border-offwhite/10 group-hover:border-secondary transition-all duration-300 mb-3 shadow-md">
								<FiGithub size={28} />
							</div>
							<span className="font-medium">GitHub</span>
						</a>
						<a
							href="https://linkedin.com/"
							target="_blank"
							rel="noreferrer"
							className="flex flex-col items-center text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300 group"
						>
							<div className="p-4 rounded-full bg-white dark:bg-charcoal border border-charcoal/10 dark:border-offwhite/10 group-hover:border-secondary transition-all duration-300 mb-3 shadow-md">
								<FiLinkedin size={28} />
							</div>
							<span className="font-medium">LinkedIn</span>
						</a>
						<a
							href="mailto:contact@example.com"
							className="flex flex-col items-center text-charcoal hover:text-secondary dark:text-offwhite dark:hover:text-secondary transition-all duration-300 group"
						>
							<div className="p-4 rounded-full bg-white dark:bg-charcoal border border-charcoal/10 dark:border-offwhite/10 group-hover:border-secondary transition-all duration-300 mb-3 shadow-md">
								<FiMail size={28} />
							</div>
							<span className="font-medium">Email</span>
						</a>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-charcoal text-offwhite py-16 px-6">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* About Column */}
					<div>
						<h3 className="text-xl font-bold mb-6">Devin Briscall</h3>
						<p className="text-offwhite/70 mb-6">
							Full Stack Developer specializing in modern web technologies and
							efficient problem-solving solutions.
						</p>
						<div className="flex space-x-5">
							<a
								href="https://github.com/"
								target="_blank"
								rel="noreferrer"
								className="text-offwhite/60 hover:text-secondary transition-colors"
							>
								<FiGithub size={22} />
							</a>
							<a
								href="https://linkedin.com/"
								target="_blank"
								rel="noreferrer"
								className="text-offwhite/60 hover:text-secondary transition-colors"
							>
								<FiLinkedin size={22} />
							</a>
							<a
								href="mailto:contact@example.com"
								className="text-offwhite/60 hover:text-secondary transition-colors"
							>
								<FiMail size={22} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-6">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handleScroll(projectsRef);
									}}
									className="text-offwhite/70 hover:text-secondary transition-colors flex items-center"
								>
									<FiArrowRight className="mr-2 text-secondary" size={14} />
									Projects
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handleScroll(skillsRef);
									}}
									className="text-offwhite/70 hover:text-secondary transition-colors flex items-center"
								>
									<FiArrowRight className="mr-2 text-secondary" size={14} />
									Skills
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handleScroll(bioRef);
									}}
									className="text-offwhite/70 hover:text-secondary transition-colors flex items-center"
								>
									<FiArrowRight className="mr-2 text-secondary" size={14} />
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handleScroll(contactRef);
									}}
									className="text-offwhite/70 hover:text-secondary transition-colors flex items-center"
								>
									<FiArrowRight className="mr-2 text-secondary" size={14} />
									Contact
								</a>
							</li>
							<li>
								<Link
									href="/projects"
									className="text-offwhite/70 hover:text-secondary transition-colors flex items-center"
								>
									<FiArrowRight className="mr-2 text-secondary" size={14} />
									All Projects
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-6">Contact</h3>
						<ul className="space-y-3">
							<li className="text-offwhite/70 flex items-start">
								<FiMail className="mr-3 text-secondary mt-1" size={18} />
								<span>contact@example.com</span>
							</li>
							<li className="text-offwhite/70 flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mr-3 text-secondary mt-1"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
								<span>Niagara, Ontario</span>
							</li>
							<li className="text-offwhite/70 flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mr-3 text-secondary mt-1"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								</svg>
								<span>
									Open for freelance opportunities and full-time positions
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-offwhite/20 mt-12 pt-8 text-center max-w-6xl mx-auto">
					<p className="mb-4">
						© {new Date().getFullYear()} Devin Briscall. All rights reserved.
					</p>
					<p className="text-offwhite/50 text-sm">
						Built with Next.js and Tailwind CSS | Last updated: March 2025
					</p>
				</div>
			</footer>
		</Page>
	);
}

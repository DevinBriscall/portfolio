import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import ImageGallery from "@/components/imageGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBoltLightning,
	faBook,
	faMedal,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const router = useRouter();
	const [headerText, setHeaderText] = useState(""); // State for the rendered text
	const [fadeImageIn, setFadeImageIn] = useState(false);
	const nameText = "Devin Briscall";
	const descriptionText = "Software Engineer";
	const tempTextRef = useRef("");
	const bioRef = useRef(null);
	const projectsRef = useRef(null);

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

		// Start typing and show the toast
		typeLetter();
	}, [router.isReady]);

	const handleScrollToBio = () => {
		if (bioRef.current) {
			// Get the position of the element
			const targetPosition =
				bioRef.current.getBoundingClientRect().top + window.pageYOffset;

			// Scroll to the target position with an offset of 68px
			window.scrollTo({
				top: targetPosition - 68,
				behavior: "smooth",
			});
		}
	};

	const handleScrollToProjects = () => {
		if (projectsRef.current) {
			// Get the position of the element
			const targetPosition =
				projectsRef.current.getBoundingClientRect().top + window.pageYOffset;

			// Scroll to the target position with an offset of 68px
			window.scrollTo({
				top: targetPosition - 68,
				behavior: "smooth",
			});
		}
	};

	return (
		<Page noPadding>
			{/* profile image section */}
			<div className="h-screenMinusNavbar flex flex-col p-2 box-border">
				<div className="flex-grow flex flex-col items-center justify-center ">
					{/* Profile Image */}
					<div
						className={`rounded-full relative hover:scale-105 w-[280px] h-[280px] drop-shadow-lg mb-5 transition-all duration-1000 ${
							fadeImageIn ? "opacity-100 " : "opacity-0 "
						}`}
					>
						<Image
							alt="a picture of me"
							src="/images/profile.png"
							className="rounded-full"
							fill={true}
							quality={100}
						/>
					</div>
					{/* Header */}
					<div className="text-center text-xl">
						<p className="font-bold text-2xl">{nameText}</p>
						<p>{headerText || "D"}</p>
					</div>
				</div>

				{/* Down Arrow */}
				<div
					className="flex flex-col items-center animate-bounce hover:cursor-pointer"
					onClick={handleScrollToProjects}
				>
					<span className="font-bold">My Projects</span>
					<FiChevronDown size={40} />
				</div>
			</div>

			{/* page divider */}
			<div className="h-1 bg-charcoal dark:bg-offwhite"></div>

			{/* Section for project cards */}
			<div
				ref={projectsRef}
				className="min-h-screenMinusNavbar box-border py-4 flex flex-col justify-between items-center"
			>
				{/* section header */}
				<div>
					<h1 className="font-bold text-lg uppercase">Project Showcase</h1>
				</div>
				{/* div for the projects */}
				<div className="w-full h-full md:w-[80vw] p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<ProjectCard
						projectName="Routine River"
						description="A task managing app that I developed to help users reduce context switching and be more productive."
						tags={[
							"React",
							"Next.js",
							"HTML",
							"JS",
							"CSS",
							"Supabase",
							"Tailwind",
							"Stripe",
						]}
						emphasizedTags={["Passion Project", "Solo Dev"]}
						imageSrc="/images/routine-river/logo.png"
						imgContain
						href="https://routineriver.com"
						openInNewTab={true}
					/>
					<ProjectCard
						projectName="SUS Contracting"
						description="A public facing website for a construction company."
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
						description="A baseball scorekeeping application."
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
				</div>
				<Link
					className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
					href={"/projects"}
				>
					See More Projects
				</Link>
				{/* Down Arrow */}
				<div
					className="flex flex-col items-center animate-bounce hover:cursor-pointer mt-4"
					onClick={handleScrollToBio}
				>
					<span className="font-bold">My Bio</span>
					<FiChevronDown size={40} />
				</div>
			</div>

			{/* page divider */}
			<div className="h-1 bg-charcoal dark:bg-offwhite"></div>

			{/* Bio / Mission Statement */}
			<div
				ref={bioRef}
				className="relative min-h-screenMinusNavbar flex flex-col justify-center gap-8 px-2 py-4 md:px-6 items-center"
			>
				{/* Biography */}
				<section className="max-w-4xl">
					<h2 className="font-bold text-xl text-center">BIOGRAPHY</h2>
					<p>
						I am a Software Engineer and Web Development Team Lead with
						experience in full-stack development, project leadership, and
						technical mentorship. My expertise in Next.js, Supabase, Strapi,
						JavaScript, SQL, and C# allows me to build scalable and efficient
						solutions tailored to client needs.
					</p>
					<p className="mt-4">
						Most recently, I led a team of developers at Civiconnect, overseeing
						sprint planning, pull requests, and standups while mentoring team
						members in modern web technologies. To improve onboarding, I created
						a developer resource hub with structured guides and hands-on
						examples.
					</p>
					<p className="mt-4">
						Beyond leadership, I have built applications that solve real-world
						problems, including{" "}
						<strong>
							<a target="_blank" href="https://www.routineriver.com">
								Routine River
							</a>
						</strong>{" "}
						a study app designed to help users stay focused with integrated
						flashcards, materials, and practice routines. I am a graduate of the
						Computer Programming and Analysis Co-op program at Niagara College
						with a 97% GPA.
					</p>
					<p className="mt-4">
						Outside of development, I&apos;m a self-taught musician in piano,
						drums, and guitar, reflecting my passion for continuous learning and
						creativity.
					</p>
				</section>
				{/* Mission */}
				<section className="max-w-5xl text-center">
					<h2 className="font-bold text-xl mb-4">MISSION</h2>
					<div className="grid sm:grid-cols-3 gap-4">
						<div className="grid">
							<div>
								<FontAwesomeIcon
									icon={faBook}
									className="text-center w-12 h-12"
								/>
							</div>
							<span className="font-bold">Continuous Learning</span>
							<p>
								Expanding my knowledge drives creativity and helps me build
								adaptable, impactful applications.
							</p>
						</div>
						<div className="grid">
							<div>
								<FontAwesomeIcon
									icon={faBoltLightning}
									className="text-center w-12 h-12"
								/>
							</div>
							<span className="font-bold ">
								Empower People Through Efficiency
							</span>
							<p>
								I strive to simplify processes, enhancing productivity so people
								can focus on what matters most.
							</p>
						</div>
						<div className="grid">
							<div>
								<FontAwesomeIcon
									icon={faMedal}
									className="text-center w-12 h-12"
								/>
							</div>
							<span className="font-bold">Create Quality</span>
							<p>
								I perform best in environments with autonomy, allowing deep
								focus and high-quality results.
							</p>
						</div>
					</div>
				</section>
			</div>
		</Page>
	);
}

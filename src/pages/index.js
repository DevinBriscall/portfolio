import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
	const router = useRouter();
	const [headerText, setHeaderText] = useState(""); // State for the rendered text
	const nameText = "Devin Briscall";
	const descriptionText = "Computer Programmer Analyst.";
	const tempTextRef = useRef("");
	const bioRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		if (!router.isReady) return;

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

			// Scroll to the target position with an offset of 72px
			window.scrollTo({
				top: targetPosition - 72,
				behavior: "smooth",
			});
		}
	};

	return (
		<Page noPadding>
			{/* profile image section */}
			<div className="h-screenMinusNavbar flex flex-col p-2">
				<div className="flex-grow flex flex-col items-center justify-center">
					{/* Profile Image */}
					<div className="rounded-full w-[280px] h-[280px] drop-shadow-lg mb-5">
						<Image
							alt="a picture of me"
							src="/images/profile.jfif"
							className="rounded-full"
							fill={true}
							quality={100}
						/>
					</div>
					{/* Header */}
					<div className="text-center text-xl">
						<p className="font-bold">{nameText}</p>
						<p>{headerText || "C"}</p>
					</div>
				</div>

				{/* Down Arrow */}
				<div
					className="w-full flex justify-center animate-bounce hover:cursor-pointer"
					onClick={handleScrollToBio}
				>
					<FiChevronDown size={40} />
				</div>
			</div>
			{/* Bio / Mission Statement */}
			<div
				ref={bioRef}
				className="bg-charcoal text-offwhite dark:text-charcoal dark:bg-offwhite h-screenMinusNavbar"
			>
				<p>BIO STUFF</p>
			</div>
			{/* Section for project cards */}
			<div
				ref={projectsRef}
				className="h-full p-2 flex flex-col gap-4 min-h-screen justify-center items-center"
			>
				{/* section header */}
				<div>
					<h1 className="font-bold uppercase">Project Showcase</h1>
				</div>
				{/* div for the projects */}
				<div className="w-full h-full sm:h-[60vh] sm:w-[80vw] grid sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr] gap-4">
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
						imageSrc="/images/sus.png"
						imgContain
					/>
					<ProjectCard
						projectName="LincolnGuessr"
						description="A geoguessr clone for the town of Lincoln, Ontario."
						tags={[
							"React",
							"Next.js",
							"HTML",
							"JS",
							"CSS",
							"Strapi",
							"styled jsx",
						]}
						imageSrc="/images/sus.png"
						imgContain
						href="/lincolnguessr"
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
						imageSrc="/images/sus.png"
						imgContain
					/>
				</div>
			</div>
		</Page>
	);
}

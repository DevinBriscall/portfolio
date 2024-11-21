import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import ImageGallery from "@/components/imageGallery";

export default function Home() {
	const router = useRouter();
	const [headerText, setHeaderText] = useState(""); // State for the rendered text
	const [fadeImageIn, setFadeImageIn] = useState(false);
	const nameText = "Devin Briscall";
	const descriptionText = "Computer Programmer Analyst.";
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
						className={`rounded-full hover:scale-105 w-[280px] h-[280px] drop-shadow-lg mb-5 transition-all duration-1000 ${
							fadeImageIn ? "opacity-100 " : "opacity-0 "
						}`}
					>
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
					<h1 className="font-bold uppercase">Project Showcase</h1>
				</div>
				{/* div for the projects */}
				<div className="w-full h-full md:w-[80vw] p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
						href="https://main.d1jtfh29tegizz.amplifyapp.com/"
						openInNewTab
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
						imageSrc="/images/lincolnGuessr.jpg"
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
						emphasizedTags={["School Community Project Winner"]}
						openInNewTab
						href="/projects/wmba"
						imageSrc="/images/wmba/logo/logo.jpg"
					/>
				</div>
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
				className="relative h-screenMinusNavbar flex flex-col gap-8 px-2 md:px-6"
			>
				{/* Biography */}
				<section>
					<h2 className="font-bold text-lg">Biography</h2>
					<p>
						I am a Web Development Team Lead at a non-profit organization,
						guiding a team of four in building websites for local businesses. My
						skills in React, JavaScript, SQL, and C# enable me to develop
						efficient solutions that meet clients&apos; needs.
					</p>
					<p className="mt-4">
						Recently, I created an app for a restaurant owner to streamline
						supplier communication and price comparison, reinforcing my
						commitment to solving real-world problems. I am also enrolled in the
						Computer Programming and Analysis Co-op program at Niagara College,
						maintaining a 97% GPA across four completed terms. Outside of work,
						I&apos;m a self-taught musician in piano, drums, and guitar,
						reflecting my passion for continuous learning.
					</p>
				</section>
				{/* Mission */}
				<section>
					<h2 className="font-bold text-lg">Mission</h2>
					<div className="grid gap-2">
						<p>
							<strong>Continuous Learning:</strong> Expanding my knowledge
							drives creativity and helps me build adaptable, impactful
							applications.
						</p>
						<p>
							<strong>Empowering People Through Efficiency:</strong> I strive to
							simplify processes, enhancing productivity so people can focus on
							what matters most.
						</p>
						<p>
							<strong>Focused Independence Creates Quality:</strong> I perform
							best in environments with autonomy, allowing deep focus and
							high-quality results.
						</p>
					</div>
				</section>
			</div>
		</Page>
	);
}

import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function index() {
	return (
		<div className="min-h-screenMinusNavbar box-border py-4 flex flex-col justify-between items-center">
			{/* section header */}
			<div>
				<h1 className="font-bold uppercase">My Projects</h1>
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
					tags={["React", "Next.js", "HTML", "JS", "CSS", "Strapi", "Tailwind"]}
					emphasizedTags={["Team Lead"]}
					imageSrc="/images/sus.png"
					imgContain
					href="/projects/sus-contracting"
				/>

				<ProjectCard
					projectName="Angel's Craft Corner"
					description="A retail website for home-made crafts."
					tags={["React", "Next.js", "HTML", "JS", "CSS", "Strapi", "Tailwind"]}
					emphasizedTags={["Team Lead", "Stripe Integrated"]}
					href="/projects/angels"
					imageSrc="/images/angels/logo-red.png"
					imgContain={true}
				/>

				<ProjectCard
					projectName="WMBA"
					description="A baseball scorekeeping application."
					tags={["C#", ".NET", "EF Core", "JSON", "JS", "JQuery", "Bootstrap"]}
					emphasizedTags={["School Community Project Winner"]}
					href="/projects/wmba"
					imageSrc="/images/wmba/logo/logo.jpg"
				/>
				<ProjectCard
					projectName="Developer Hub"
					description="A hub I made for new Civiconnect employees to learn about various web development concepts and programming languages."
					tags={[
						"React",
						"Next.js",
						"HTML",
						"JS",
						"CSS",
						"Strapi",
						"styled jsx",
					]}
					emphasizedTags={["Teaching Resource"]}
					imageSrc="/images/developer-hub/hub.jpg"
					href="projects/developer-hub"
				/>
				<ProjectCard
					projectName="Contoso Retail Data Analysis"
					description="A PowerBI dashboard detailing sales analytics for Contoso Retailers for years 2007, 2008, 2009."
					tags={["PowerBI", "Data Ananlysis", "Data Warehousing"]}
					href="/projects/contoso"
					imageSrc="/images/contoso/contoso.jpg"
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
					href="projects/lincolnguessr"
				/>
			</div>
		</div>
	);
}

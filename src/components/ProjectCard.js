import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
	projectName = "Some Name",
	tags = ["React", "Next.js", "HTML", "JS", "CSS"],
	imageSrc = "/images/profile.jfif",
	description = "A baseball scorekeeping application.",
	imgContain,
	href = "",
}) {
	return (
		<Link href={href}>
			<div className="grid min-h-[320px] sm:hover:scale-105 hover:cursor-pointer transition-scale duration-500 grid-rows-2 w-full h-full text-offwhite bg-charcoal dark:border dark:border-slate-500 opacity-95 rounded drop-shadow-lg">
				<div className="relative m-2">
					<Image
						alt={`${projectName} image`}
						src={imageSrc}
						fill={true}
						className={`rounded ${
							imgContain ? "object-contain" : "object-cover"
						}`}
					/>
				</div>
				{/* descriptive content */}
				<div className="mx-4 grid">
					<div>
						<p className="font-bold text-lg uppercase">{projectName}</p>
						<p>{description}</p>
					</div>
					{/* tags */}
					<div>
						<div className="flex flex-wrap gap-1">
							{tags.map((tag, i) => {
								return (
									<div
										key={tag + i}
										className="bg-secondary rounded-sm px-4 h-6 text-offwhite  font-bold flex justify-center items-center"
									>
										<span className="m-0 p-0 select-none">{tag}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

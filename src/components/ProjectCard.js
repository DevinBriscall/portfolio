import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
	projectName = "",
	tags = [],
	emphasizedTags = [],
	imageSrc = "",
	description = "",
	imgContain,
	href = "",
	openInNewTab,
}) {
	return (
		<Link href={href} target={openInNewTab ? "_blank" : ""}>
			<div className="grid min-h-[400px] sm:hover:scale-105 hover:cursor-pointer transition-scale duration-500 grid-rows-2 w-full h-full text-offwhite bg-charcoal dark:border dark:border-slate-700 opacity-95 rounded drop-shadow-lg">
				<div className="relative m-2 overflow-hidden">
					<Image
						alt={`${projectName} image`}
						src={imageSrc || "/images/empty.jpg"}
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
										className="bg-secondary text-nowrap rounded-sm px-4 text-offwhite  font-bold flex justify-center items-center"
									>
										<span className="m-0 p-0 select-none">{tag}</span>
									</div>
								);
							})}
							{emphasizedTags.map((tag, i) => {
								return (
									<div
										key={tag + i}
										className="bg-green-600 animate-pulse rounded-sm px-4 text-offwhite  font-bold flex justify-center items-center"
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

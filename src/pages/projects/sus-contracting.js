import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SusContracting() {
	return (
		<div className="flex flex-col items-center min-h-screenMinusNavbar p-2">
			<div className="max-w-6xl">
				<div className="relative h-36 w-full">
					<Image
						alt="sus-contracting logo"
						src={"/images/sus.png"}
						fill="true"
						className="object-contain bg-charcoal rounded p-4"
					/>
				</div>
				<div className="">
					<h1 className="font-bold">Sus Contracting</h1>
					<p>
						Sus Contracting is a general contracting company for which I
						designed and developed a responsive website. Leading a team of four,
						I utilized GitHub, Next.js, and Strapi to deliver a client-focused
						solution.
					</p>
					<p className="mt-2 mb-16">
						As the team lead, I managed the codebase by reviewing pull requests,
						planning sprints, and facilitating standup meetings, while also
						contributing directly to the code.
					</p>
					<div className="flex justify-center">
						<Link
							target="_blank"
							className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
							href="https://suscontractinginc.com/"
						>
							See the site
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

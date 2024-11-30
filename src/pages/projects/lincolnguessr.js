import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function lincolnguessr() {
	return (
		<div className="flex flex-col items-center min-h-screenMinusNavbar">
			<div className="max-w-6xl">
				<div className="relative h-52 md:h-[50vh] w-full">
					<Image
						alt="sus-contracting logo"
						src={"/images/lincolnguessr.jpg"}
						fill="true"
						className="object-contain rounded p-4"
					/>
				</div>
				<div className="p-2">
					<h1 className="font-bold">LincolnGuessr</h1>
					<p className="mb-16">
						LincolnGuessr is a GeoGuessr-inspired game I developed for the town
						of Lincoln, Ontario, using React, Supabase, and styled JSX. Players
						are presented with a static image of a location within Lincoln and
						must guess its position on an interactive map. The game calculates
						your accuracy using the Haversine formula, scoring your guess out of
						5000 points. After completing three rounds, players can see their
						ranking on the Supabase-integrated leaderboard.
					</p>
					<div className="flex justify-center">
						<Link
							target="_blank"
							className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
							href="/lincolnguessr"
						>
							Play
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

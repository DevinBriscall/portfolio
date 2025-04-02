import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SusContracting() {
	return (
		<div className="flex flex-col items-center min-h-screenMinusNavbar p-2">
			<div className="max-w-6xl">
				<div className="relative h-36 w-full">
					<Image
						alt="angel's craft corner logo"
						src={"/images/angels/logo-red.png"}
						fill="true"
						className="object-contain bg-charcoal rounded p-4"
					/>
				</div>
				<div className="">
					<h1 className="font-bold">Angel&apos;s Craft Corner</h1>
					<p>
						Angel&apos;s Craft Corner is a Stripe-integrated retail site built
						for a client who sells handmade crafts. Leading a team of four, I
						spearheaded the development using Next.js, Strapi, Stripe, Tailwind
						CSS, and GitHub to create a seamless e-commerce experience.
					</p>
					<p className="mt-2 mb-16">
						As the team lead, I managed the project by reviewing pull requests,
						planning sprints, and organizing standup meetings, ensuring smooth
						collaboration and timely delivery. Additionally, I contributed
						directly to the codebase, implementing key features such as payment
						processing and product management.
					</p>
					<div className="flex justify-center">
						<Link
							target="_blank"
							className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
							href="https://main.d6v8rcrcqf6we.amplifyapp.com/"
						>
							See the site
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

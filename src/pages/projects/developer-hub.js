import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function lincolnguessr() {
	return (
		<div className="flex flex-col items-center min-h-screenMinusNavbar">
			<div className="max-w-6xl">
				<div className="relative h-52 md:h-[50vh] w-full">
					<Image
						alt="image of the developer hub dashboard"
						src={"/images/developer-hub/hub.jpg"}
						fill="true"
						className="object-contain rounded p-4"
					/>
				</div>
				<div className="p-2">
					<h1 className="font-bold">Developer Hub</h1>
					<p className="mb-16">
						The Developer Hub is a comprehensive teaching resource I created to
						help new employees learn our tech stack. It includes interactive
						examples and detailed explanations covering a wide range of
						full-stack web development concepts. From front-end frameworks like
						React to back-end technologies and database integration, the
						Developer Hub provides a structured learning path for mastering the
						tools and practices we use daily. It’s designed to make onboarding
						smoother and empower developers to contribute confidently to our
						projects.
					</p>
					<div className="flex justify-center">
						<a
							className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
							href="https://react-sand-nu.vercel.app/"
							target="_blank"
						>
							Explore
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

import ImageGallery from "@/components/imageGallery";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function WMBA() {
	const [imageFolders, setImageFolders] = useState([]);
	//get all the image folder paths
	useEffect(() => {
		const fetchImageFolders = async () => {
			try {
				const response = await fetch(`/images/wmba/subFolders.json`);
				const imageSubFolders = await response.json();
				setImageFolders(imageSubFolders);
				console.log("Response:", response);
			} catch (error) {
				console.error("Error fetching images:", error);
			}
		};

		fetchImageFolders();
	}, []);
	return (
		<>
			<div className="flex flex-col items-center min-h-screenMinusNavbar p-2">
				<div className="max-w-6xl">
					<div className="relative h-96 w-full">
						<Image
							alt="sus-contracting logo"
							src={"/images/wmba/logo/logo.jpg"}
							fill="true"
							className="object-contain rounded p-4"
						/>
					</div>
					<div className="">
						<h1 className="font-bold">Sus Contracting</h1>
						<p>
							Sus Contracting is a general contracting company for which I
							designed and developed a responsive website. Leading a team of
							four, I utilized GitHub, Next.js, and Strapi to deliver a
							client-focused solution.
						</p>
						<p className="mt-2 mb-16">
							As the team lead, I managed the codebase by reviewing pull
							requests, planning sprints, and facilitating standup meetings,
							while also contributing directly to the code.
						</p>
						<div className="flex justify-center">
							<Link
								target="_blank"
								className="bg-charcoal font-bold text-offwhite dark:bg-offwhite dark:text-charcoal rounded py-2 px-4 hover:scale-105 transition-all duration-300"
								href="https://main.d1jtfh29tegizz.amplifyapp.com/"
							>
								See the site
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-screenMinusNavbar md:p-6 p-2 flex flex-wrap gap-4">
				{/* for each image folder, make a image gallery */}
				{imageFolders.map((path) => (
					<div key={path} className="relative w-full lg:w-1/2 h-96 rounded">
						<ImageGallery imageFolderPath={`/images/wmba/${path}`} />
					</div>
				))}
			</div>
		</>
	);
}

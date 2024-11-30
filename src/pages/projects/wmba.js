import ImageGallery from "@/components/imageGallery";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function WMBA() {
	const [imageFolders, setImageFolders] = useState([]);

	const overviewRef = useRef(null);
	const sectionDescriptions = [
		{
			title: "placeholder",
			body: "Role-based logins grant admins exclusive privileges, such as editing user roles, managing lookup values, and initiating new seasons.",
		},
		{
			title: "Admin Controls",
			body: "Role-based logins grant admins exclusive privileges, such as editing user roles, managing lookup values, and initiating new seasons.",
		},
		{
			title: "Authentication",
			body: "The project features a robust authentication system, providing seamless registration, password recovery, and login functionality.",
		},
		{
			title: "Create, Read, Update, Delete",
			body: "This application supports full CRUD functionality, enabling precise management of all collections with data securely stored in a database.",
		},
		{
			title: "Game Scoring",
			body: "The app includes a comprehensive game scoring system that tracks each game individually while aggregating player stats cumulatively. It adheres to baseball rules and incorporates error handling to prevent invalid inputs.",
		},
		{
			title: "Help System",
			body: "To ensure ease of use for all, including non-tech-savvy users, the app integrates a help system with tooltips and contextual menus throughout.",
		},
		{
			title: "Importing",
			body: "Recognizing the need for efficiency, the app supports CSV imports, enabling quick and seamless player data uploads for new seasons.",
		},
		{
			title: "Reports",
			body: "Admins can generate detailed reports to analyze season statistics. These insights help create balanced teams for future seasons, enhancing the experience for everyone.",
		},
		{
			title: "Setting Lineups",
			body: "Coaches can customize lineups for each game, offering granular control over batting orders on a game-by-game basis.",
		},
	];

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
	const handleScrollToOverview = () => {
		if (overviewRef.current) {
			// Get the position of the element
			const targetPosition =
				overviewRef.current.getBoundingClientRect().top + window.pageYOffset;

			// Scroll to the target position with an offset of 68px
			window.scrollTo({
				top: targetPosition - 68,
				behavior: "smooth",
			});
		}
	};
	return (
		<>
			<div className="flex flex-col justify-between items-center min-h-screenMinusNavbar p-2">
				<div className="max-w-6xl">
					<div className="relative h-96 w-full">
						<Image
							alt="welland minor baseball association logo"
							src={"/images/wmba/logo/logo.jpg"}
							fill="true"
							className="object-contain rounded p-4"
						/>
					</div>
					<div className="">
						<h1 className="font-bold">Welland Minor Baseball Association</h1>
						<p>
							For a school community project, I and three others competed
							against other teams of four to develop the best possible solution
							for a client. This client was the Welland Minor Baseball
							Association who requested an application for managing teams,
							scoring games, and tracking statistics.
						</p>
						<p className="mt-2">
							On this project I was the github manager, I ensured all of our
							code was version controlled and did not conflict. I also developed
							a complex scoring system incorporating all the rules of baseball
							and tracking MLB style statistics for the WMBA&apos;s players.
						</p>
						<p className="mt-2 mb-16">
							In the end our team was chosen as the best application and we are
							planning to launch for WMBA&apos;s 2025 season.
						</p>
					</div>
				</div>
				<div
					className="flex flex-col items-center animate-bounce hover:cursor-pointer mt-4"
					onClick={handleScrollToOverview}
				>
					<span className="font-bold">Site Overview</span>
					<FiChevronDown size={40} />
				</div>
			</div>
			<div
				ref={overviewRef}
				className="min-h-screenMinusNavbar md:p-6 p-2 flex flex-wrap gap-4"
			>
				{/* for each image folder, make a image gallery */}
				{imageFolders.map((path, i) => {
					if (i !== 0) {
						return (
							<>
								<div className="grid w-full lg:grid-cols-2 gap-4">
									<div
										key={path}
										className={`relative order-1 w-full flex h-[50vh] rounded `}
									>
										<ImageGallery imageFolderPath={`/images/wmba/${path}`} />
									</div>
									<div
										className={`flex flex-col justify-center ${
											i % 2 == 0 ? "lg:order-1" : ""
										}`}
									>
										<span className="font-bold">
											{sectionDescriptions[i].title}
										</span>
										<p>{sectionDescriptions[i].body}</p>
									</div>
								</div>
							</>
						);
					}
					return null;
				})}
			</div>
		</>
	);
}

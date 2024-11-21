import ImageGallery from "@/components/imageGallery";
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
		<div className="min-h-screenMinusNavbar md:p-6 p-2 flex flex-wrap gap-4">
			{/* for each image folder, make a image gallery */}
			{imageFolders.map((path) => (
				<div key={path} className="relative w-full lg:w-1/2 h-96 rounded">
					<ImageGallery imageFolderPath={`/images/wmba/${path}`} />
				</div>
			))}
		</div>
	);
}

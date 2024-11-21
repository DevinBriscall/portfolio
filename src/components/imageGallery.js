import {
	faArrowLeft,
	faArrowRight,
	faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageGallery({ imageFolderPath = "/images" }) {
	const [images, setImages] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				// Fetch the directory listing (assuming a predefined list or API endpoint)
				const response = await fetch(`${imageFolderPath}/images.json`); // Requires a JSON file listing all images
				const imageList = await response.json();
				setImages(imageList);
			} catch (error) {
				console.error("Error fetching images:", error);
			}
		};

		fetchImages();
	}, [imageFolderPath]);

	useEffect(() => {
		if (isModalOpen) return;
		// Cycle through the images every 3 seconds
		const intervalId = setInterval(() => {
			if (!isModalOpen) {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
			}
		}, 3000);

		return () => clearInterval(intervalId); // Cleanup on unmount
	}, [images, isModalOpen]);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	useEffect(() => {
		// Disable scrolling when modal is open
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen]);

	if (!images.length) {
		return <div>Loading images...</div>;
	}

	return (
		<>
			{/* Single Image Display */}
			<div
				className="w-full h-full cursor-pointer hover:scale-105 transition-all duration-300"
				onClick={openModal}
			>
				<Image
					src={`${imageFolderPath}/${images[currentIndex]}`}
					alt={`Slide ${currentIndex + 1}`}
					fill={true}
					className="object-cover rounded"
				/>
			</div>

			{/* Modal for Full-Size Image */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 bg-offwhite dark:bg-charcoal bg-opacity-75 flex justify-center items-center"
					onClick={closeModal}
				>
					<div
						className="relative bg-charcoal rounded shadow-lg w-full h-5/6 max-w-7xl max-h-screen"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={`${imageFolderPath}/${images[currentIndex]}`}
							alt={`Image ${currentIndex + 1}`}
							fill={true}
							className="object-contain"
						/>

						{/* Close Button */}
						<button
							className="absolute top-4 right-4 flex justify-center items-center hover:scale-105 transition-all duration-300 text-white dark:text-charcoal bg-charcoal dark:bg-offwhite rounded-full w-8 h-8 p-2"
							onClick={closeModal}
						>
							<FontAwesomeIcon icon={faClose} />
						</button>

						{/* Navigation Arrows */}
						{images.length > 1 && (
							<>
								<button
									className="absolute justify-center hover:scale-105 transition-all duration-300 items-center flex left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 text-2xl"
									onClick={(e) => {
										e.stopPropagation();
										goToPrevious();
									}}
								>
									<FontAwesomeIcon icon={faArrowLeft} />
								</button>
								<button
									className="absolute justify-center hover:scale-105 transition-all duration-300 items-center flex right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 text-2xl"
									onClick={(e) => {
										e.stopPropagation();
										goToNext();
									}}
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>{" "}
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
}

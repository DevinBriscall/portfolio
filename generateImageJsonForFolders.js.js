const fs = require("fs");
const path = require("path");

// Root folder containing subfolders with images
const rootFolderPath = path.join(__dirname, "public/images/wmba");
const supportedExtensions = [".png", ".jpg", ".jpeg", ".svg", ".gif", ".webp"];

// Function to create JSON for images in a specific folder
const generateJsonForFolder = (folderPath) => {
	try {
		const files = fs.readdirSync(folderPath);

		// Filter for supported image files
		const images = files.filter((file) =>
			supportedExtensions.includes(path.extname(file).toLowerCase())
		);

		// Generate JSON file path
		const jsonPath = path.join(folderPath, "images.json");

		// Write JSON file
		fs.writeFileSync(jsonPath, JSON.stringify(images, null, 2), "utf8");
		console.log(`Generated JSON for folder: ${folderPath}`);
	} catch (error) {
		console.error(`Error processing folder ${folderPath}:`, error);
	}
};

// Function to traverse subfolders and generate JSON files
const traverseFolders = (folderPath) => {
	try {
		const items = fs.readdirSync(folderPath, { withFileTypes: true });

		for (const item of items) {
			const itemPath = path.join(folderPath, item.name);

			if (item.isDirectory()) {
				// Recursively process subfolders
				traverseFolders(itemPath);

				// Generate JSON for the current folder
				generateJsonForFolder(itemPath);
			}
		}
	} catch (error) {
		console.error(`Error traversing folder ${folderPath}:`, error);
	}
};

// Start the process
traverseFolders(rootFolderPath);
console.log("JSON generation for all folders is complete.");

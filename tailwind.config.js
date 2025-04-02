/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					light: "var(--offwhite)",
					dark: "var(--charcoal)",
				},
				offwhite: "var(--offwhite)",
				charcoal: "var(--charcoal)",
				secondary: "var(--secondary)",
				accent: {
					100: "#e6f7ff", // Light accent for backgrounds
					300: "#91d5ff", // Lighter accent
					500: "#1890ff", // Main accent color
					700: "#096dd9", // Darker accent
					900: "#003a8c", // Very dark accent
				},
				neutral: {
					50: "#fafafa", // Very light neutral
					100: "#f5f5f5", // Light neutral
					200: "#e5e5e5", // Light neutral for borders
					300: "#d4d4d4", // Medium light neutral
					700: "#404040", // Medium dark neutral
					800: "#262626", // Dark neutral
					900: "#171717", // Very dark neutral
				},
			},
			height: {
				navbar: "72px",
				screenMinusNavbar: "calc(100dvh - 72px)",
			},
			minHeight: {
				screenMinusNavbar: "calc(100dvh - 72px)",
			},
			borderColor: {
				DEFAULT: "var(--charcoal)", // Light mode default
				dark: "var(--offwhite)", // Dark mode default
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Poppins", "sans-serif"],
			},
			boxShadow: {
				card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				"card-hover":
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			},
		},
	},
	plugins: [],
};

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
				ruby: "var(--ruby)",
			},
			height: {
				navbar: "72px",
				screenMinusNavbar: "calc(100vh - 72px)",
			},
		},
	},
	plugins: [],
};

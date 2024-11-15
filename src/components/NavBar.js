import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar() {
	return (
		<nav className="h-navbar sticky top-0 z-10 bg-offwhite dark:bg-charcoal flex items-center justify-between px-2 sm:px-8 border-b select-none">
			<h1 className="bold text-primary uppercase font-bold text-lg">
				Devin Briscall
			</h1>
			<ThemeSwitch />
		</nav>
	);
}

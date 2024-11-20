import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="h-navbar sticky top-0 z-10 bg-offwhite dark:bg-charcoal flex items-center justify-between px-2 sm:px-8 border-b select-none">
			<Link href={"/"}>
				<h1 className="bold text-primary text-nowrap uppercase font-bold text-lg">
					Devin Briscall
				</h1>
			</Link>
			{/* links */}
			<div className="flex gap-2 md:gap-4 text-3xl items-center ">
				{/* Resume */}
				<Link
					href={"/resume"}
					className="bg-charcoal text-nowrap text-sm dark:bg-offwhite text-offwhite dark:text-charcoal font-bold px-4 py-2 rounded transition-all duration-300 hover:scale-105"
				>
					Resume
				</Link>
				<a href="https://github.com/DevinBriscall" target="_blank">
					<FontAwesomeIcon
						icon={faGithub}
						className="hover:cursor-pointer hover:scale-105"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/devin-briscall-933843271"
					target="_blank"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="hover:cursor-pointer hover:scale-105"
					/>
				</a>
			</div>
		</nav>
	);
}

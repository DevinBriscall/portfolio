import "@/styles/globals.css";
import { Saira } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
const saira = Saira({ subsets: ["latin"] });
import { Providers } from "@/components/providers";
import { useRouter } from "next/router";
import ThemeSwitch from "@/components/ThemeSwitch";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();

	return (
		<>
			<style jsx global>{`
				* {
					font-family: ${saira.style.fontFamily};
				}
			`}</style>

			<Head>
				<title>Devin Briscall | Web Developer</title>
				<meta
					name="description"
					content="Experienced Web Developer & Team Lead skilled in Next.js, React, Strapi, Supabase, and full-stack development. Passionate about building efficient and scalable web applications."
				/>
				<meta
					name="keywords"
					content="Devin Briscall, Web Developer, Next.js, React, Supabase, Strapi, JavaScript, Full-Stack Developer, Software Engineer, Frontend, Backend"
				/>
				<meta name="author" content="Devin Briscall" />
				<meta property="og:title" content="Devin Briscall | Web Developer" />
				<meta
					property="og:description"
					content="Experienced Web Developer & Team Lead skilled in Next.js, React, and full-stack development."
				/>
				<meta property="og:url" content="https://www.devinbriscall.com" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://www.devinbriscall.com/images/profile.png"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>

			<main className="bg-primary-light dark:bg-primary-dark transition-colors duration-700">
				<Providers>
					{router.pathname != "/lincolnguessr" && <NavBar />}
					{isMounted && (
						<Toaster
							position="bottom-left"
							toastOptions={{
								duration: 5000,
							}}
						/>
					)}
					<Component {...pageProps} />
					{router.pathname != "/lincolnguessr" && (
						<div className="fixed right-8 bottom-8 bg-inherit w-10 h-10 text-2xl hover:cursor-pointer flex justify-center items-center rounded-full hover:scale-125 transistion-all duration-300">
							<ThemeSwitch />
						</div>
					)}
				</Providers>
			</main>
		</>
	);
}

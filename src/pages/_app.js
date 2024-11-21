import "@/styles/globals.css";
import { Saira } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
const saira = Saira({ subsets: ["latin"] });
import { Providers } from "@/components/providers";
import { useRouter } from "next/router";
import ThemeSwitch from "@/components/ThemeSwitch";

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

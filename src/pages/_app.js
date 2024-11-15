import "@/styles/globals.css";
import { Saira } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
const saira = Saira({ subsets: ["latin"] });
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useRouter } from "next/router";

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
				</Providers>
			</main>
		</>
	);
}

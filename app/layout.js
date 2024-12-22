import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import CookiesPopup from "./components/CookiesPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	metadataBase: new URL("https://www.spiritpharmafrance.fr/"),
	title: "Spirit Pharma France",
	description:
		"Spirit Pharma France est une entreprise de distribution de produits pharmaceutiques.",
	openGraph: {
		title: "Spirit Pharma France",
		description:
			"Spirit Pharma France est une entreprise de distribution de produits pharmaceutiques.",
		type: "website",
		url: "https://www.spiritpharmafrance.fr/",
	},
	favicon: "/favicon.ico",
	keywords: [
		"pharmaceutical",
		"distribution",
		"pharmacy",
		"health",
		"medicine",
		"pharmaceutical distribution",
		"Santé",
		"Pharmacie",
		"Médicament",
		"Distribution pharmaceutique",
		"Pharmaceutique",
		"Pharmacie",
		"Spirit Pharma France",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar key="Navbar" />
				{children}
				{/* <ContactButton key="ContactButton" /> */}
				<CookiesPopup key="CookiesPopup" />
			</body>
		</html>
	);
}

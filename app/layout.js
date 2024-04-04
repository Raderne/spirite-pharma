import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import CookiesPopup from "./components/CookiesPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spirite Pharma France",
  description:
    "Spirite Pharma France est une entreprise de distribution de produits pharmaceutiques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar key="Navbar" />
        {children}
        <ContactButton key="ContactButton" />
        <CookiesPopup key="CookiesPopup" />
      </body>
    </html>
  );
}

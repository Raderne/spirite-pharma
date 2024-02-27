import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      </body>
    </html>
  );
}

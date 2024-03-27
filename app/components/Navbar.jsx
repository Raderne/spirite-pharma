"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";

import { getSanityData } from "../utils/getSanityData";

import Placeholder from "@/app/images/placeholder.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/boutique", label: "boutique" },
  { href: "/complements-alimentaires", label: "Compléments Alimentaires" },
  { href: "/dermo-cosmetique", label: "Dermo-Cosmétique" },
  { href: "/news", label: "News" },
  { href: "/propos-de-spf", label: "À propos de SPF" },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchData = async () => {
      const query = "*[_type == 'profile'][0]";
      const data = await getSanityData(query);
      setProfileData(data);
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      className={`mb-8 md:mb-0 border-b lg:fixed bg-white w-full z-[5000] relative lg:shadow-lg ${
        visible
          ? "lg:top-0 transition-all duration-300"
          : "lg:-top-full transition-all duration-700"
      }`}
    >
      <div className="relative flex gap-10 items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <Image
            src={Placeholder}
            alt={profileData?.name || "SPF Logo"}
            width={500}
            height={500}
            priority
            className="cursor-pointer w-44 my-1 md:my-3 lg:w-32"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-md hover:text-[#31bbee] ${
            !isMenuOpen ? "text-gray-400" : "text-[#31bbee]"
          } focus:outline-none lg:hidden transition duration-300 ease-in-out`}
        >
          {!isMenuOpen ? <AlignJustify size={48} /> : <X size={48} />}
        </button>

        <nav
          className={`${
            isMenuOpen
              ? "max-h-screen overflow-y-auto h-96 bg-white w-full"
              : "max-h-0 overflow-hidden"
          } z-50 flex-col absolute w-full top-full left-0 items-center flex lg:flex-row lg:relative lg:w-auto lg:top-0 lg:justify-start lg:gap-4 transition-all duration-500 ease-in-out lg:h-auto lg:max-h-none lg:overflow-visible`}
        >
          {links.map(({ href, label }) => (
            <div
              key={href}
              className="my-2 w-full pl-4 md:w-auto md:my-0 md:pl-0"
            >
              {pathname === href ? (
                <Link
                  href={href}
                  className="text-[#31bbee] font-bold text-2xl hover:text-gray-500 transition duration-300 ease-in-out lg:text-base"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  href={href}
                  className="text-gray-500 font-bold text-2xl hover:text-[#31bbee] transition duration-300 ease-in-out  lg:text-base"
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
          <Button className="bg-button-primary hover:bg-button-primary-hover lg:hidden w-5/6 mt-4 md:w-1/3">
            <a href="/contactez-nous">Contactez-Nous</a>
          </Button>
        </nav>

        <Button className="bg-button-primary hover:bg-button-primary-hover hidden lg:block">
          <a href="/contactez-nous">Contactez-Nous</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

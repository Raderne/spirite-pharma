"use client";

import React, { useEffect, useState } from "react";
import { Playfair } from "next/font/google";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";
import SocialLink from "@/app/components/SocialLink";
import { getSanityData } from "@/app/utils/getSanityData";

const playfair = Playfair({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const FooterClient = () => {
  const year = new Date().getFullYear();
  const [footerData, setFooterData] = useState({
    facebook: "",
    email: "",
    phone: "",
  });
  const [phoneNum, setPhoneNum] = useState("");
  const { facebook, email, phone } = footerData;

  useEffect(() => {
    const fetchFooterData = async () => {
      const query = `*[_type == 'profile'][0]{
            facebook,
            email,
            phone
        }`;

      const data = await getSanityData(query);
      let phoneNum = data?.phone
        .split(" ")
        .join("")
        .split("+")
        .join("")
        .split("-")
        .join("");
      setFooterData(data);
      setPhoneNum(phoneNum);
    };
    fetchFooterData();
  }, []);

  return (
    <div className="flex flex-col items-center my-12 w-full min-h-32 ">
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-y-5 md:gap-x-6 md:items-center">
        <SocialLink
          Icon={BiSolidPhoneCall}
          content={phone || "06 61 31 89 76"}
          href={"tel:" + phone || "0661318976"}
        />
        <SocialLink
          Icon={MdEmail}
          content={email || ""}
          href={"mailto:" + email || ""}
        />
        <SocialLink
          Icon={FaWhatsapp}
          content={phone || "06 61 31 89 76"}
          href={`https://wa.me/${phoneNum}`}
        />
        <SocialLink
          Icon={FaFacebookF}
          content={facebook || ""}
          href={facebook || ""}
        />
      </div>

      <Link
        href={`https://wa.me/${phoneNum || "0661318976"}`}
        className="flex gap-x-4 items-center mt-6 hover:text-green-400 transition-all duration-300 ease-in-out hover:scale-90"
      >
        <FaWhatsapp className="text-6xl" />
        <h2 className="lg:text-4xl text-2xl">
          Passez vos commandes sur WhatsApp : 06 61 31 89 76
        </h2>
      </Link>

      <p
        className={`text-xs md:text-xl text-gray-400 mt-4 ${playfair.className}`}
      >
        © Copyright {year || ""} Spirit Pharma France. All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterClient;

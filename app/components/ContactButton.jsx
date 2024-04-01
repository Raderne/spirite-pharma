import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ContactButton = () => {
  return (
    <Link
      className="fixed bottom-6 right-6 hidden bg-button-primary-green text-white md:flex md:items-center md:justify-center gap-x-6 hover:py-4 hover:px-8 rounded-xl group hover:bg-button-primary-green-hover transition-all duration-300 ease-in-out hover:shadow-md group overflow-hidden z-50 w-24 h-24 hover:w-72"
      href={
        "https://api.whatsapp.com/send/?phone=212661318976&text=Bonjour+SPIRIT+PHARMA+FRANCE%2C%0D%0Aje+souhaite+savoir+plus+de+d%C3%A9tails+sur+vos+produits%2C+Merci.&type=phone_number&app_absent=0"
      }
    >
      <FaWhatsapp className="text-6xl" />
      <span className="text-xl hidden group-hover:block transition-all duration-1000 ease-in-out">
        Contactez-nous sur WhatsApp
      </span>
    </Link>
  );
};

export default ContactButton;

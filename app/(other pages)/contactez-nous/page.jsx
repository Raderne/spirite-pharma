"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { getSanityData } from "@/app/utils/getSanityData";
import Link from "next/link";

import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const poppins = Poppins({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const ContactUsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [phoneNum, setPhoneNum] = useState("0661318976");

  useEffect(() => {
    const fetchContactData = async () => {
      const query = `*[_type == 'profile'][0]{
            name,
            phone,
            facebook,
            email,
            address
        }`;

      try {
        const data = await getSanityData(query);
        setContactData(data);
        let phone = data?.phone
          .split(" ")
          .join("")
          .split("+")
          .join("")
          .split("-")
          .join("");

        setPhoneNum(phone);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContactData();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const mailto = `mailto:relmarzouki2@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;
      window.open(mailto, "_blank").focus();
      setIsLoading(false);
      e.target.reset();
    } catch (error) {
      setError("Une erreur s'est produite, veuillez réessayer");
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto max-w-2xl sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl overflow-hidden min-h-screen lg:pb-8 lg:pt-24 flex items-center justify-center">
        <div className="w-full bg-white rounded-md shadow-xl z-50 overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div
            className={`${poppins.className} py-9 px-8 z-10 overflow-hidden relative max-w-[90%]`}
          >
            <h3 className="capitalize text-text-primary-blue font-medium text-2xl leading-none mb-3">
              prenez contact avec Nous
            </h3>
            <p className="text-[#333] mb-8">
              Vous avez des questions, des commentaires ou des suggestions? Nous
              serions ravis de vous entendre. Remplissez le formulaire
              ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
            <div>
              <div className="flex items-center text-[#555] my-3 text-[0.95rem]">
                <FaLocationDot className="text-[#1ABC9C] text-xl mr-3" />
                <p className="text-lg">
                  {contactData?.address || "Adresse non disponible"}
                </p>
              </div>
              <div className="flex items-center text-[#555] my-3 text-[0.95rem]">
                <IoMdCall className="text-[#1ABC9C] text-xl mr-3" />
                <p className="text-lg">
                  {contactData?.phone || "Téléphone non disponible"}
                </p>
              </div>
              <div className="flex items-center text-[#555] my-3 text-[0.95rem]">
                <MdEmail className="text-[#1ABC9C] text-xl mr-3" />
                <p className="text-lg">
                  {contactData?.email || "Email non disponible"}
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="capitalize">Connectez avec nous:</p>
              <div className="flex mt-2">
                <Link
                  href={contactData?.facebook || ""}
                  className="w-9 h-9 rounded text-center flex justify-center items-center mr-2 text-white hover:bg-[#1ABC9C] hover:scale-105 bg-text-primary-blue transition-all duration-300 ease-in-out"
                >
                  <FaFacebookF size={24} />
                </Link>
                <Link
                  href={`https://wa.me/${phoneNum || "0661318976"}`}
                  className="w-9 h-9 rounded text-center flex justify-center items-center mr-2 text-white hover:bg-[#1ABC9C] hover:scale-105 bg-text-primary-blue transition-all duration-300 ease-in-out"
                >
                  <MdWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="bg-text-primary-blue relative before:content-[''] before:absolute before:w-7 before:h-7 before:bg-text-primary-blue before:rotate-45 before:top-[-13px] before:left-[initial] before:right-16 md:before:top-[50px] md:before:left-[-13px]">
            <form
              className={`${poppins.className} py-9 px-8 z-10 overflow-hidden relative`}
              onSubmit={submitForm}
            >
              <h3 className="text-white font-medium text-2xl leading-none mb-3">
                Contactez-nous
              </h3>
              <div className="input-container my-4 relative">
                <input
                  name="name"
                  type="text"
                  placeholder="Nom"
                  required
                  className="w-full outline-none border-2 border-[#fafafa] bg-transparent py-3 px-5 text-white font-medium tracking-[0.5px] rounded-md placeholder:text-white placeholder-opacity-50"
                />
              </div>
              <div className="input-container my-4 relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full outline-none border-2 border-[#fafafa] bg-transparent py-3 px-5 text-white font-medium tracking-[0.5px] rounded-md placeholder:text-white placeholder-opacity-50"
                />
              </div>
              <div className="input-container my-4 relative">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Numéro de téléphone"
                  required
                  className="w-full outline-none border-2 border-[#fafafa] bg-transparent py-3 px-5 text-white font-medium tracking-[0.5px] rounded-md placeholder:text-white placeholder-opacity-50"
                />
              </div>
              <div className="my-4 relative">
                <textarea
                  name="message"
                  placeholder="Commentaire ou message..."
                  required
                  className="w-full outline-none border-2 border-[#fafafa] bg-transparent py-3 px-5 text-white font-medium tracking-[0.5px] rounded-md min-h-36 resize-none overflow-y-auto placeholder:text-white placeholder-opacity-50"
                ></textarea>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="submit"
                className="w-full bg-white text-text-primary-blue py-3 rounded-md font-medium tracking-[0.5px] transition-all duration-300 hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-[#fafafa] mt-4"
              >
                {isLoading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

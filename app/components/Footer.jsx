import React from "react";
import QuestionCard from "./QuestionCard";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import SocialLink from "./SocialLink";
import { getSanityData } from "../utils/getSanityData";

const Footer = async (props) => {
  const {
    font: { instrumentSerif, playfair },
  } = props;

  const year = new Date().getFullYear();

  const query = `*[_type == 'profile'][0]{
        facebook,
        email,
        phone
    }`;

  const data = await getSanityData(query);
  const { facebook, email, phone } = data;
  let phoneNum = phone
    .split(" ")
    .join("")
    .split("+")
    .join("")
    .split("-")
    .join("");

  return (
    <section className="text-white mx-auto max-w-2xl pb-16 lg:max-w-full lg:pt-12 lg:w-full min-h-screen bg-body-background-dark-blue">
      <div className="lg:mx-auto py-10 lg:py-8 lg:max-w-screen-xl px-5 flex flex-col gap-y-4 md:gap-y-16">
        <div className="flex flex-col items-center gap-y-4 md:gap-y-6">
          <h1
            className={`text-3xl lg:text-7xl md:tracking-wide  ${instrumentSerif.className}`}
          >
            À Propos de Nous
          </h1>
          <p
            className={`text-base md:text-lg lg:text-xl text-center ${playfair.className} md:max-w-screen-md`}
          >
            Spirit Pharma France a pour vocation le développement de compléments
            alimentaires et des produits dermo-cosmétiques de soin ou d’hygiène
            pour le visage et le corps.{" "}
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-4 md:gap-y-6">
          <h1
            className={`text-2xl lg:text-5xl md:tracking-wide  ${instrumentSerif.className}`}
          >
            Curious Minds
          </h1>
          <div className="flex flex-col md:flex-row gap-4 w-full items-start justify-between">
            <QuestionCard
              playfair={playfair}
              question="Qu'est-ce qui distingue les produits cosmétiques de SpiritePharmaFrance ?"
              answer="Nous respectons les normes les plus élevées d’intégrité et de transparence dans toutes nos interactions avec nos partenaires."
            />
            <QuestionCard
              playfair={playfair}
              question="Quelle est la mission de SpiritePharmaFrance ?"
              answer="Nous sommes engagés à la création de produits de qualité supérieure pour le bien-être de nos clients."
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 mt-6 md:mt-24 text-[#6FFFE9] min-h-40 w-full">
            <h1 className={`${instrumentSerif.className} text-3xl md:text-7xl`}>
              Get Started
            </h1>
            <p
              className={`text-base md:text-lg lg:text-xl text-center ${playfair.className} md:max-w-screen-md`}
            >
              Revitalisez votre routine de soins de la peau et succombez à
              l&apos;attrait des produits indulgents de SpiritePharmaFrance.
              Participez à la transformation !
            </p>
            <Link
              href="/boutique"
              className={`bg-[#6FFFE9] text-gray-900 py-3 px-6 rounded-xl ${playfair.className} mt-4 text-base md:text-lg hover:bg-transparent hover:text-[#6FFFE9] hover:border hover:border-[#6FFFE9] transition-all duration-100 ease-in-out`}
            >
              Explorez nos produits
            </Link>
          </div>
          <div className="flex flex-col items-center mt-16 md:mt-24 w-full min-h-32">
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-y-5 md:gap-x-6 md:items-center">
              <SocialLink
                Icon={BiSolidPhoneCall}
                content={phone}
                href={"tel:" + phone}
              />
              <SocialLink
                Icon={MdEmail}
                content={email}
                href={"mailto:" + email}
              />
              <SocialLink
                Icon={FaWhatsapp}
                content={phone}
                href={`https://wa.me/${phoneNum}`}
              />
              <SocialLink
                Icon={FaFacebookF}
                content={facebook}
                href={facebook}
              />
            </div>

            <Link
              href={`https://wa.me/${phoneNum}`}
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
              © Copyright {year} Spirit Pharma France. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

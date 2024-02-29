import React from "react";
import Link from "next/link";
import { Instrument_Serif, Playfair } from "next/font/google";
import { Button } from "@/components/ui/button";
import { getSanityData } from "../utils/getSanityData";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  preload: false,
  weight: "400",
});

const playfair = Playfair({
  subsets: ["latin"],
  preload: false,
  weight: "400",
});

const Hero = async () => {
  const query = "*[_type == 'profile'][0]{phone}";
  const data = await getSanityData(query);

  const phone = data?.phone.split("+", " ", "-").join() || "212661318976";

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:pb-8 lg:mt-24">
      <div className="my-4 flex flex-col items-center gap-y-8 md:gap-y-12 h-full">
        <div className="lg:mt-4">
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 lg:text-[10rem] lg:leading-none xl:text-[11rem] xl:leading-none flex flex-col items-center select-none">
            <span className={`block ${instrumentSerif.className}`}>
              SPIRITE PHARMA
            </span>
            <span
              className={`block ${playfair.className} text-body-background-dark-blue lg:leading-[0.5] lg:text-[11rem] xl:text-[12rem] tracking-widest `}
            >
              Cosmetics
            </span>
          </h1>
        </div>
        <div className="px-12 md:px-0 md:w-2/3">
          <p className="text-base font-medium text-justify text-gray-500 lg:text-xl lg:mt-4 lg:leading-9 lg:text-center">
            Spirit Pharma France a pour vocation le développement de compléments
            alimentaires et des produits dermo-cosmétiques de soin ou d’hygiène
            pour le visage et le corps. 
          </p>
        </div>

        <div className="w-full px-12 sm:px-0 flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-10 sm:w-2/3">
          <Button className="w-full sm:w-auto bg-button-secondary-light-blue hover:bg-button-secondary-light-blue-hover text-gray-900 text-xl font-semibold px-4 py-8 rounded-2xl">
            <Link href="/boutique" className="w-full">
              Découvrir Notre Boutique
            </Link>
          </Button>
          <Button className="w-full sm:w-auto bg-button-primary-green hover:bg-button-primary-green-hover text-xl font-semibold px-4 py-8 rounded-2xl">
            <Link
              className="w-full"
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Envoyez Un Message Whatsapp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

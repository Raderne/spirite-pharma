"use client";

import React, { useEffect, useState } from "react";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Instrument_Serif } from "next/font/google";
import { getSanityData } from "../utils/getSanityData";

import "../css/embla.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  preload: false,
  weight: "400",
});

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PreferredProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'product']{
          title,
          _id,
          description,
          "slug": slug.current,
          "imageUrl": mainImage.asset -> url,
      }`;
      const data = await getSanityData(query);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="mx-auto max-w-2xl sm:pb-6 lg:max-w-full lg:pb-8 lg:mt-24 bg-body-background-dark-blue lg:mx-0 lg:w-full">
      <div className="lg:mx-auto py-10 lg:py-8">
        <div className="flex flex-col items-center gap-y-12 h-full">
          <h2
            className={`text-3xl font-semibold text-white text-center lg:text-4xl ${instrumentSerif.className}`}
          >
            Produits préférés des clients
          </h2>
          <div className="w-full">
            {data.length > 0 && (
              <EmblaCarousel options={OPTIONS} slides={data} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferredProducts;

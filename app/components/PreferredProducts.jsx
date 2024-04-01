"use client";

import React, { useEffect, useState } from "react";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { getSanityData } from "../utils/getSanityData";

import "../css/embla.css";
import Loading from "../loading";

const OPTIONS = { loop: true };

const PreferredProducts = (props) => {
  const { font: instrumentSerif } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = `*[_type == 'product'][0...6] {
          title,
          _id,
          description,
          "slug": slug.current,
          "imageUrl": mainImage.asset -> url,
      }`;
      try {
        const data = await getSanityData(query);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mx-auto max-w-2xl sm:pb-6 lg:max-w-full mt-12 lg:pb-8 lg:pt-12 bg-body-background-dark-blue lg:mx-0 lg:w-full">
      <div className="lg:mx-auto py-10 lg:py-8">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center gap-y-8 md:gap-y-12 h-full">
            <h2
              className={`text-3xl font-semibold text-white text-center md:pb-4 lg:text-6xl ${instrumentSerif.className}`}
            >
              Produits préférés des clients
            </h2>
            <div className="w-full">
              {data.length > 0 && (
                <EmblaCarousel options={OPTIONS} slides={data} />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreferredProducts;

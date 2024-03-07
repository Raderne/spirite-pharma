import React from "react";
import { getSanityData } from "../utils/getSanityData";
import LandingProductCard from "./LandingProductCard";

export const dynamic = "force-dynamic";

const NewProducts = async (props) => {
  const {
    font: { instrumentSerif, playfair },
  } = props;

  const query = `*[_type == 'product'][0...10] | order(publishedAt asc){
        title,
        _id,
        "generalCategory": generalCategory->title,
        "generalCategorySlug": generalCategory->slug.current,
        "slug": slug.current,
        "imageUrl": mainImage.asset -> url,
    }`;

  const data = await getSanityData(query);

  return (
    <section className="bg-body-background-light-blue text-white mx-auto max-w-2xl sm:pb-6 lg:max-w-full lg:pb-8 lg:pt-12 lg:w-full min-h-screen">
      <div className="lg:mx-auto py-10 lg:py-8 lg:max-w-screen-xl px-5">
        <div className="flex flex-col items-center gap-y-8 md:gap-y-12 h-full">
          <div className="flex flex-col items-center gap-y-4 md:gap-y-2">
            <h2
              className={`text-3xl font-semibold text-white text-center md:pb-4 lg:text-6xl ${instrumentSerif.className}`}
            >
              Nouveautés
            </h2>
            <p
              className={`text-base font-medium text-white text-center md:text-lg lg:text-xl md:max-w-screen-sm ${playfair.className}`}
            >
              Découvrez notre nouvelle gamme de produits cosmétiques et de soins
              pour le visage et le corps.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              {data.map((product, index) => (
                <LandingProductCard
                  key={product._id}
                  product={product}
                  index={index}
                  instrumentSerif={instrumentSerif.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;

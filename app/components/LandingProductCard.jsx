import React from "react";
import Image from "next/image";
import Link from "next/link";

const indicesToCheck = [0, 3, 4, 7];

const LandingProductCard = (props) => {
  const {
    product: { title, generalCategory, slug, imageUrl, generalCategorySlug },
    index,
    instrumentSerif,
  } = props;

  let gridColumn = indicesToCheck.includes(index)
    ? "md:col-span-3"
    : "md:col-span-2";

  return (
    <Link
      href={`/product/${slug}`}
      className={`${gridColumn} hover:shadow-lg hover:shadow-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div className="bg-gray-900 p-4 md:p-6 flex flex-col gap-y-8">
        <div className="">
          <h2
            className={`text-xl md:text-2xl tracking-wider line-clamp-1 ${instrumentSerif}`}
            style={{ fontWeight: "700" }}
          >
            {title}
          </h2>
          <p className="text-base md:tracking-wide md:text-lg text-[#6FFFE9] hover:text-text-primary-blue">
            {generalCategory}
          </p>
        </div>
        <div className="relative w-full h-80 md:h-96 bg-white rounded-2xl overflow-hidden grid place-content-center">
          <Image
            src={imageUrl || ""}
            alt={title || "product image"}
            width={400}
            height={400}
            className="rounded-2xl object-cover object-center"
          />
        </div>
      </div>
    </Link>
  );
};

export default LandingProductCard;

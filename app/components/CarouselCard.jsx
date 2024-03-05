import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CarouselCard = (props) => {
  const { slide } = props;
  const { title, imageUrl, slug, description } = slide;
  const descriptionText = description
    ?.map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");
  return (
    <>
      <div className="h-1/2 md:h-2/3 w-full bg-white rounded-xl flex items-center justify-center">
        <Image
          alt="Carousel Product Image"
          src={imageUrl}
          width={300}
          height={300}
          className="h-auto w-1/2 md:w-auto object-cover"
        />
      </div>
      <div className="text-xl md:text-5xl text-[#333] line-clamp-1">
        {title}
      </div>
      {description != null ? (
        <p className="text-base line-clamp-2 font-normal text-center">
          {descriptionText}
        </p>
      ) : (
        <p className="text-base font-normal text-center">
          Pour plus d&apos;informations, cliquez sur le bouton ci-dessous
        </p>
      )}
      <Button className="bg-body-background-dark-blue hover:bg-transparent hover:border hover:border-body-background-dark-blue hover:text-body-background-dark-blue text-lg py-6 w-5/6 md:w-1/3">
        <a href={`/produits/${slug}`} className="w-full">
          En savoir plus
        </a>
      </Button>
    </>
  );
};

export default CarouselCard;

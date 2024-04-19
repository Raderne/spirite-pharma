import React from "react";
import Image from "next/image";

const ProductCard = (props) => {
  const {
    product: { title, image },
  } = props;

  return (
    <div
      className="bg-slate-300 rounded-3xl w-full h-96 flex flex-col items-center justify-around hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 relative group"
      title={title}
    >
      <div className="rounded-2xl bg-gray-50 overflow-hidden h-3/4 flex items-center max-w-[90%]">
        <Image
          src={image}
          alt={title || "product image"}
          width={300}
          height={300}
          className="rounded-2xl overflow-hidden object-contain object-center h-full"
        />
      </div>
      <h3
        className={`text-lg md:text-2xl text-gray-800 font-bold text-center w-3/4 uppercase line-clamp-1 transition duration-300 ease-in-out`}
        title={title}
      >
        {title}
      </h3>
    </div>
  );
};

export default ProductCard;

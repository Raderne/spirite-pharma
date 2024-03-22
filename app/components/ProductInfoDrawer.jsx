import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { PortableText } from "@portabletext/react";

const ProductInfoDrawer = (props) => {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#e3f7f8] px-6 py-4 cursor-pointer rounded-md">
      <div
        className="flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title && (
          <h2 className="text-lg font-semibold text-[#1d1d1d]">{title}</h2>
        )}
        <div className="flex items-center justify-center w-8 h-8 text-text-primary-blue rounded-full">
          {isOpen ? <ImMinus size={20} /> : <ImPlus size={20} />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
          isOpen ? "max-h-[1000px] pt-4" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <PortableText value={content} />
      </div>
    </div>
  );
};

export default ProductInfoDrawer;

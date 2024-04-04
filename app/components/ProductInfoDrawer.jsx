import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { PortableText } from "@portabletext/react";

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mr-4 mb-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-6 ml-8">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li className="list-disc text-black ml-8">{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "decimal" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className="text-base">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>,
    h4: ({ children }) => (
      <h4 className="text-base font-semibold">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-semibold">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold">{children}</h6>
    ),
  },
  // pass false on hardBreak to disable rendering <br> tags
  hardBreak: false,
};

const ProductInfoDrawer = (props) => {
  const { title, content, text } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#e3f7f8] px-6 py-4 cursor-pointer rounded-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
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
        {text ? (
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ) : (
          <PortableText value={content} components={components} />
        )}
      </div>
    </div>
  );
};

export default ProductInfoDrawer;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSanityData } from "../../../utils/getSanityData";

export const dynamic = "force-dynamic";

const CategoryPage = (props) => {
  const {
    params: { slug },
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesQuery = `*[_type == 'category'] | order(title asc) {
            "generalCategory": generalCategory -> title,
              "generalCategorySlug": generalCategory -> slug.current,
              title,
              "slug": slug.current,
              description
          }`;
      const categoriesData = await getSanityData(categoriesQuery);
      setCategories(categoriesData);
    };

    const fetchProducts = async () => {
      const query = `*[_type == 'product' && '${slug}' in categories[] -> slug.current] {
            _id,
            title,
            "image": mainImage.asset -> url,
            "generalCategory": generalCategory -> title,
            "generalCategorySlug": generalCategory -> slug.current,
            "slug": slug.current,
            "categories": categories[]->{
              "categoryTitle": title,
              "categorySlug": slug.current,
            }
          }`;

      const data = await getSanityData(query);
      setProductsData(data);
    };

    fetchCategories();
    fetchProducts();
  }, [slug]);

  return (
    <div className="bg-white -mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-1 relative p-2">
        <button
          className="md:hidden absolute top-4 right-4 p-2 bg-white rounded-md flex shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          Catégories
        </button>
        <div
          className={`flex flex-col gap-y-2 bg-card-light-blue-background p-4 rounded-xl absolute z-20 ${
            isOpen
              ? "left-4 w-4/5 transition-all duration-500 ease-in-out"
              : "-left-full transition-all duration-500 ease-in-out"
          } md:sticky md:top-4 w-[90%] md:w-auto`}
        >
          <h3 className="text-xl font-bold text-body-background-dark-blue flex justify-between items-center">
            Catégories de produits
            <span className="cursor-pointer md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setIsOpen(!isOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </h3>

          {categories?.map((category) => (
            <Link
              href={`/category/${category?.slug}`}
              key={category?.slug}
              className={`font-semibold hover:text-text-primary-blue hover:animate-pulse ${
                category?.slug === slug
                  ? "text-text-primary-blue text-2xl"
                  : "text-gray-900 text-lg"
              }`}
            >
              {category?.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 col-span-4">
        <div className="mt-6 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            {categories?.find((category) => category.slug === slug)?.title}
          </h2>

          <p className="text-gray-500 max-w-screen-sm md:max-w-screen-lg text-sm md:text-base">
            {
              categories?.find((category) => category.slug === slug)
                ?.description
            }
          </p>

          <p className="mt-3">Voici les produits de la catégorie:</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {productsData?.map((product) => (
            <Link
              className="group relative bg-card-light-blue-background p-2 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden"
              key={product._id}
              href={`/product/${product.slug}`}
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-50 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product?.image}
                  alt="product image"
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold line-clamp-1 text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.generalCategory}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

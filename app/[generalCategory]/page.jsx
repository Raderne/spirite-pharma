"use client";
import React, { Suspense, useEffect, useState } from "react";
import { getSanityData } from "../utils/getSanityData";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProductCard from "../components/ProductCard";

const GeneralCategoryPages = (props) => {
  const {
    params: { generalCategory },
  } = props;

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    title: "",
    slug: "",
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == 'category' && generalCategory -> slug.current == "${generalCategory}"] | order(title asc) {
            title,
            "slug": slug.current
        }`;
      const data = await getSanityData(query);
      setCategories(data);
      setCurrentCategory(data[0]);
    };
    fetchCategories();
  }, [generalCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && "${currentCategory.slug}" in categories[] -> slug.current] {
                _id,
                title,
                "image": mainImage.asset -> url,
                "slug": slug.current
              }`;
        const data = await getSanityData(query);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    // fetch after currentCategory is set
    if (currentCategory) {
      fetchProducts();
    }
  }, [currentCategory]);

  return (
    <section className="md:pt-24 grid grid-cols-1 md:grid-cols-5 md:gap-x-8 md:px-10 pb-6 min-h-screen bg-slate-600 -mt-8 md:mt-0">
      <div className="h-full col-span-1">
        <div className="rounded-3xl py-12 grid grid-cols-1 px-2 md:px-0 md:flex md:flex-col text-white">
          <div
            className={`block relative ${
              currentCategory === null
                ? "bg-slate-800 text-gray-100"
                : "bg-slate-100 text-gray-800"
            } py-2 px-4 rounded-sm text-2xl mb-2 md:mb-4 group hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden cursor-pointer`}
            onClick={() => setCurrentCategory(null)}
          >
            Tous les produits
            <span
              className={`text-3xl ${
                currentCategory === null ? "text-gray-100" : "text-gray-800"
              } absolute right-1 top-1/2 -translate-y-1/2 group-hover:right-2 transition-all duration-300 ease-in-out`}
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
          </div>
          {categories.length > 0 &&
            categories?.map((category) => (
              <div
                key={category?.slug}
                className={`block relative ${
                  currentCategory?.slug === category?.slug
                    ? "bg-slate-800 text-gray-100"
                    : "bg-slate-100 text-gray-800"
                } py-2 px-4 rounded-sm text-2xl mb-2 md:mb-4 group hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden cursor-pointer`}
                onClick={() => setCurrentCategory(category)}
              >
                {category?.title}
                <span
                  className={`text-3xl ${
                    currentCategory?.slug === category?.slug
                      ? "text-gray-100"
                      : "text-gray-800"
                  } absolute right-1 top-1/2 -translate-y-1/2 group-hover:right-2 transition-all duration-300 ease-in-out`}
                >
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-4 flex items-center px-2 md:px-0">
        <div className="bg-slate-100 rounded-3xl w-full h-full p-6 md:p-12 flex flex-col gap-y-6">
          <h1 className="text-3xl text-center md:text-start md:text-6xl text-gray-800 font-bold">
            {currentCategory?.title || "Tous les produits"}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.length > 0 && currentCategory
              ? products.map((product) => (
                  <Link
                    key={product._id}
                    href={`/${generalCategory}/${currentCategory?.slug}/${product.slug}`}
                  >
                    <ProductCard />
                  </Link>
                ))
              : Array.from({ length: 4 }).map((_, index) => (
                  <SuspendedCard key={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralCategoryPages;

const SuspendedCard = () => {
  return (
    <div className="bg-slate-300 rounded-3xl w-full h-96 animate-pulse"></div>
  );
};

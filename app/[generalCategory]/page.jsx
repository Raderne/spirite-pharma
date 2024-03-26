"use client";
import React, { Suspense, useEffect, useState } from "react";
import { getSanityData } from "../utils/getSanityData";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProductCard from "../components/ProductCard";

export const dynamic = "force-dynamic";

const GeneralCategoryPages = (props) => {
  const {
    params: { generalCategory },
  } = props;

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    title: "Tous les produits",
    slug: "tous-produits",
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
    };
    fetchCategories();
  }, [generalCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && generalCategory -> slug.current == "${generalCategory}" ${
          currentCategory.slug !== "tous-produits" &&
          currentCategory.slug !== "" &&
          currentCategory.slug !== undefined
            ? `&& "${currentCategory.slug}" in categories[] -> slug.current`
            : ""
        }] {
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
  }, [currentCategory, generalCategory]);

  return (
    <section className="md:pt-24 grid grid-cols-1 md:grid-cols-5 md:gap-x-8 md:px-10 pb-6 min-h-screen bg-slate-600 -mt-8 md:mt-0">
      <div className="h-full col-span-1">
        <div className="rounded-3xl py-12 grid grid-cols-1 px-2 md:px-0 md:flex md:flex-col text-white">
          <div
            className={`block relative ${
              currentCategory?.slug === "tous-produits"
                ? "bg-slate-800 text-gray-100"
                : "bg-slate-100 text-gray-800"
            } py-2 px-4 rounded-sm text-2xl md:text-sm lg:text-2xl mb-2 md:mb-4 group hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden cursor-pointer`}
            onClick={() =>
              setCurrentCategory({
                title: "Tous les produits",
                slug: "tous-produits",
              })
            }
          >
            Tous les produits
            <span
              className={`text-3xl ${
                currentCategory?.slug === "tous-produits"
                  ? "text-gray-100"
                  : "text-gray-800"
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
                } py-2 px-4 rounded-sm text-2xl md:text-sm lg:text-2xl mb-2 md:mb-4 group hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden cursor-pointer`}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center md:justify-items-stretch ">
            {products.length > 0 && currentCategory
              ? products.map((product) => (
                  <Link key={product._id} href={`/product/${product.slug}`}>
                    <ProductCard product={product} />
                  </Link>
                ))
              : Array.from({ length: 6 }).map((_, index) => (
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
    <div className="bg-slate-500 rounded-3xl w-full h-96 animate-pulse"></div>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { getSanityData } from "@/app/utils/getSanityData";
import Link from "next/link";
import Image from "next/image";
import { Oswald, Roboto } from "next/font/google";
import { PortableText } from "@portabletext/react";
import ProductInfoDrawer from "@/app/components/ProductInfoDrawer";
import FooterClient from "@/app/components/FooterClientSide";
import SimilarProduct from "@/app/components/SimilarProduct";

const oswald = Oswald({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
});

const roboto = Roboto({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
});

const ProductPage = (props) => {
  const {
    params: { slug },
  } = props;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
        title,
        description,
        "slug": slug.current,
        "image": mainImage.asset -> url,
        "generalCategoryTitle": generalCategory -> title,
        "generalCategorySlug": generalCategory -> slug.current,
        "categories": categories[]->{
          "categoryTitle": title,
          "categorySlug": slug.current,
        },
        utilisation,
        composition,
        ingredients,
        properties,
        indications,
        precautions,
    }`;

      const data = await getSanityData(query);
      setProduct(data);
    };
    fetchProduct();
  }, [slug]);

  return (
    <div className="min-h-screen -mt-8 md:mt-0">
      <div className="md:py-8 lg:pt-20">
        <div className="py-11 bg-text-primary-blue px-4 md:px-0">
          <div className="mx-auto flex gap-x-2 text-white font-semibold max-w-2xl lg:max-w-7xl xl:max-w-screen-xl">
            <Link href={`/boutique`}>Boutique</Link>
            <span>/</span>
            <Link href={`/${product?.generalCategorySlug}`}>
              {product?.generalCategoryTitle}
            </Link>
            <span>/</span>
            <span>{product?.title}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl overflow-hidden lg:pb-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white md:gap-x-6">
          <div className="flex justify-center items-center p-8 bg-slate-200">
            <Image
              src={product?.image}
              alt={product?.title || "product image"}
              width={500}
              height={500}
              className="object-cover rounded-md w-full h-auto"
            />
          </div>
          <div
            className={`flex flex-col gap-y-3 p-4 md:p-0 ${roboto.className}`}
          >
            <h2 className="text-lg text-center md:text-start leading-none">
              {product?.generalCategoryTitle}
            </h2>
            <h1
              className={`text-7xl text-center md:text-start mb-4 md:mb-0 md:text-6xl font-bold text-text-primary-blue ${oswald.className}`}
            >
              {product?.title}
            </h1>
            <div className="flex items-center">
              <span className="font-bold mr-2">Catégories: </span>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-x-2">
                {product?.categories?.map((category) => (
                  <Link
                    key={category?.categorySlug}
                    href={`/category/${category?.categorySlug}`}
                    className="text-text-primary-blue hover:underline hover:text-blue-500 transition-all duration-300 ease-in-out"
                  >
                    {category?.categoryTitle},
                  </Link>
                ))}
              </div>
            </div>
            {product?.description && (
              <div className="mb-3 md:mb-5">
                <PortableText value={product?.description} />
              </div>
            )}
            {product?.composition && (
              <ProductInfoDrawer
                title="Composition"
                content={product?.composition}
              />
            )}
            {product?.utilisation && (
              <ProductInfoDrawer
                title="Utilisation"
                content={product?.utilisation}
              />
            )}
            {product?.ingredients && (
              <ProductInfoDrawer
                title="Ingrédients"
                content={product?.ingredients}
              />
            )}
            {product?.properties && (
              <ProductInfoDrawer
                title="Propriétés"
                content={product?.properties}
              />
            )}
            {product?.indications && (
              <ProductInfoDrawer
                title="Indications"
                content={product?.indications}
              />
            )}
            {product?.precautions && (
              <ProductInfoDrawer
                title="Précautions"
                content={product?.precautions}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl">
        <SimilarProduct
          mainProduct={{
            productSlug: slug,
            generalCategorySlug: product?.generalCategorySlug,
          }}
        />
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl">
        <FooterClient />
      </div>
    </div>
  );
};

export default ProductPage;

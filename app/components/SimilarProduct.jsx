"use client";
import React, { useState, useEffect } from "react";
import { getSanityData } from "@/app/utils/getSanityData";
import ProductCard from "./ProductCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

const SimilarProduct = (props) => {
  const {
    mainProduct: { generalCategorySlug, productSlug },
  } = props;

  const [similarProducts, setSimilarProducts] = useState(null);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      const query = `*[_type == 'product' && generalCategory -> slug.current == "${generalCategorySlug}" && slug.current != "${productSlug}"][0..3] | order(_updatedAt desc) {
            title,
            "image": mainImage.asset -> url,
            "slug": slug.current,
            }`;

      const data = await getSanityData(query);
      setSimilarProducts(data);
    };
    fetchSimilarProducts();
  }, [generalCategorySlug, productSlug]);

  return (
    <div className="px-3 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
        Produits similaires :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {similarProducts?.map((product, index) => (
          <Link href={`/product/${product.slug}`} key={index}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;

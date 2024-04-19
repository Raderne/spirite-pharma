import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSanityData } from "../utils/getSanityData";
import Loading from "../loading";

export const dynamic = "force-dynamic";

const BoutiquePage = async () => {
  const query = `*[_type == 'product']{
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

  const categories = data
    ?.map((product) => product.categories)
    .filter((category) => category);

  const uniqueCategories =
    categories.length > 0
      ? categories?.reduce((acc, category) => {
          category.forEach((cat) => {
            if (!acc.find((c) => c.categorySlug === cat.categorySlug)) {
              acc.push(cat);
            }
          });
          return acc;
        })
      : [];

  return (
    <div className="bg-white md:mt-20 grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-1 relative p-2">
        <div className="flex flex-col gap-y-2 bg-card-light-blue-background p-4 rounded-xl ">
          <h3 className="text-xl font-bold text-body-background-dark-blue">
            Catégories de produits
          </h3>
          {uniqueCategories?.length !== 0 &&
            uniqueCategories?.map((category) => (
              <Link
                href={`/category/${category.categorySlug}`}
                key={category.categorySlug}
                className="text-gray-900 text-lg font-semibold hover:text-button-primary hover:animate-pulse"
              >
                {category.categoryTitle}
              </Link>
            ))}
        </div>
      </div>

      <div className="max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 col-span-4">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            Bienvenue sur le site de Spirite Pharma France !
          </h2>
        </div>

        <Suspense fallback={<Loading />}>
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.length !== 0 ? (
              data?.map((product) => (
                <Link
                  className="group relative bg-card-light-blue-background p-2 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 overflow-hidden"
                  key={product._id}
                  href={`/product/${product.slug}`}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 lg:h-80">
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
              ))
            ) : (
              <div className="flex justify-center items-center">
                <p className="text-lg font-semibold text-gray-500">
                  Aucun produit n&apos;a été trouvé
                </p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default BoutiquePage;

import React from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { getSanityData } from "@/app/utils/getSanityData";
import ArticleTile from "@/app/components/ArticleTile";
import PagesFooter from "@/app/components/PagesFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

export const dynamic = "force-dynamic";

const NewsPage = async () => {
  const query = `*[_type == "news"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    "image": Image.asset -> url,
    content
  }`;

  const newsArticles = await getSanityData(query);

  return (
    <div className="bg-slate-100 min-h-screen pb-4">
      <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-white min-h-screen lg:pb-8 lg:pt-24 mb-12">
        <h1
          className={`text-xl md:text-4xl block font-semibold text-center select-none ${spaceGrotesk.className}`}
        >
          Nos Actualités de
          <span className="text-button-primary"> Spirit Pharma France</span>
        </h1>
        <div className="w-40 h-1 bg-button-primary mx-auto my-4 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-x-4">
          <div className="order-2 md:order-1 col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsArticles?.map((article) => {
              return (
                <ArticleTile
                  key={article?.slug}
                  article={article}
                  spaceGrotesk={spaceGrotesk.className}
                />
              );
            })}
          </div>
          <div className="order-1 md:order-2 col-span-2 p-4 flex flex-col gap-y-3">
            <h2 className="text-lg md:text-2xl font-bold mb-3">
              Actualités Récentes :
            </h2>
            {newsArticles?.map((article) => {
              return (
                <Link
                  key={article?.slug}
                  href={`/news/${article?.slug}`}
                  className={`text-md md:text-lg ml-4 text-blue-950 hover:text-button-primary-hover ${spaceGrotesk.className}`}
                >
                  **{article?.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl ">
        <PagesFooter />
      </div>
    </div>
  );
};

export default NewsPage;

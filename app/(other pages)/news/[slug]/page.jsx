import React from "react";
import { getSanityData } from "@/app/utils/getSanityData";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Space_Grotesk } from "next/font/google";
import ArticleTile from "@/app/components/ArticleTile";
import PagesFooter from "@/app/components/PagesFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const myPortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#1bbcbe] font-bold underline"
        >
          {children}
        </a>
      );
    },
  },
};

const ArticlePage = async (props) => {
  const {
    params: { slug },
  } = props;

  const query = `*[_type == "news" && slug.current == "${slug}" ][0] {
    title,
    publishedAt,
    "image": Image.asset -> url,
    content,
    author,
  }`;

  const article = await getSanityData(query);

  const newsQuery = `*[_type == "news" && slug.current != "${slug}"] {
    title,
    "slug": slug.current,
    publishedAt,
    "image": Image.asset -> url,
    }`;

  const newsArticles = await getSanityData(newsQuery);

  return (
    <div className="bg-[#f2cc8f] min-h-screen pb-4">
      <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-white min-h-screen lg:pb-8 lg:pt-24 mb-12 rounded-b-xl">
        <h1
          className={`text-xl md:text-6xl block font-semibold text-[#1bbcbe] text-center select-none ${spaceGrotesk.className}`}
        >
          {article?.title}
        </h1>
        <div className="w-40 md:w-80 h-1 bg-[#1bbcbe] mx-auto my-4 mb-10"></div>
        <div className="w-full mx-auto max-w-4xl min-h-52 overflow-hidden rounded-xl shadow-md bg-white flex items-center justify-center">
          <Image
            src={article?.image}
            alt={article?.title || "article image"}
            width={500}
            height={300}
          />
        </div>
        <p className="text-center text-[#1bbcbe] font-bold mt-4">
          {new Date(article?.publishedAt).toLocaleDateString("us-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="w-full mx-auto max-w-4xl p-4 leading-loose">
          <PortableText
            value={article?.content}
            components={myPortableTextComponents}
          />
        </div>
        <p className="w-full mx-auto max-w-4xl p-4 text-text-primary-blue">
          <span className="font-semibold text-black">Auteur:</span>{" "}
          {article?.author}
        </p>
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-white py-8 mb-12 rounded-xl">
        <h2
          className={`text-xl md:text-4xl block font-semibold text-[#1bbcbe] text-center select-none ${spaceGrotesk.className}`}
        >
          Autres Actualités
        </h2>
        <div className="w-40 h-1 bg-[#1bbcbe] mx-auto my-4 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-4">
          {newsArticles?.map((article) => {
            return (
              <ArticleTile
                key={article?.slug}
                article={article}
                spaceGrotesk={spaceGrotesk.className}
                showContent={false}
              />
            );
          })}
        </div>
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl ">
        <PagesFooter />
      </div>
    </div>
  );
};

export default ArticlePage;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

const ArticleTile = (props) => {
  const { article, spaceGrotesk, showContent = true } = props;

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
            className="text-button-primary font-bold"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="flex flex-col gap-y-4 py-4 px-6 shadow-md hover:shadow-xl transition duration-150 ease-in rounded-lg bg-slate-50">
      <p className={`capitalize text-[#1bbcbe] font-bold ${spaceGrotesk}`}>
        {new Date(article?.publishedAt).toLocaleDateString("us-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="w-full min-h-56 overflow-hidden rounded-md border border-gray-400 bg-white flex items-center justify-center">
        <Image
          src={article?.image}
          alt={article?.title}
          width={500}
          height={300}
          layout="responsive"
        />
      </div>

      <Link
        href={`/news/${article?.slug}`}
        className={`text-lg md:text-2xl font-bold text-[#1bbcbe] hover:text-button-primary-hover ${spaceGrotesk}`}
      >
        {article?.title}
      </Link>

      {showContent && (
        <div className="line-clamp-3">
          <PortableText
            value={article?.content}
            components={myPortableTextComponents}
          />
        </div>
      )}

      {showContent && (
        <Button className="mt-auto">
          <Link href={`/news/${article?.slug}`} className="w-full text-xl">
            Lire l&apos;article
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ArticleTile;

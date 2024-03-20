import React from "react";
import Link from "next/link";
import "../css/socialLink.css";

const SocialLink = (props) => {
  const { Icon, href, content } = props;

  return (
    <Link
      href={href || "#"}
      className="cursor-pointer flex md:items-center md:justify-center relative gap-x-4 social-popup hover:text-text-primary-blue transform transition duration-300 ease-in-out"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon className="text-4xl w-9 h-9 md:w-12 md:h-12" />
      <span className="text-base md:text-lg py-1 px-4 flex-1 md:flex-auto md:py-2 md:px-6 rounded-xl bg-white md:absolute md:top-[130%] md:left-1/2 md:-translate-x-1/2 text-gray-900 md:hidden w-max">
        {content}
      </span>
    </Link>
  );
};

export default SocialLink;

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CategoriesSection = ({ categories, slug = "" }) => {
	const [isOpen, setIsOpen] = useState(false);
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get("selectedCategory");
	const categoryRefs = useRef({});

	useEffect(() => {
		if (selectedCategory) {
			const interval = setInterval(() => {
				const categoryElement = categoryRefs.current[selectedCategory];
				if (categoryElement) {
					categoryElement.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
					clearInterval(interval); // Stop checking once found
				}
			}, 100); // Check every 100ms
			return () => clearInterval(interval);
		}
	}, [selectedCategory]);

	return (
		<>
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
				className={`flex flex-col gap-y-2 bg-card-light-blue-background p-4 rounded-xl md:h-full overflow-y-auto absolute z-20 ${
					isOpen
						? "left-4 w-4/5 transition-all duration-500 ease-in-out"
						: "-left-full transition-all duration-500 ease-in-out"
				} md:sticky md:top-4 w-[90%] md:w-auto`}
			>
				<h3 className="text-xl font-bold text-body-background-dark-blue">
					Catégories de produits
				</h3>
				{categories?.length !== 0 &&
					categories?.map((category) => (
						<Link
							href={`/category/${category.categorySlug}?selectedCategory=${category.categorySlug}`}
							key={category.categorySlug}
							ref={(el) => (categoryRefs.current[category.categorySlug] = el)}
							className={`font-semibold hover:text-text-primary-blue hover:animate-pulse ${
								category?.categorySlug === slug
									? "text-text-primary-blue text-2xl"
									: "text-gray-900 text-lg"
							}`}
						>
							{category.categoryTitle}
						</Link>
					))}
			</div>
		</>
	);
};

export default CategoriesSection;

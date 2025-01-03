import React from "react";
import Image from "next/image";

const ProductCard = (props) => {
	const {
		product: { title, image },
		generalCategory,
	} = props;

	return (
		<div
			className="bg-slate-300 rounded-3xl w-full h-96 flex flex-col justify-around hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 relative group"
			title={title}
		>
			<div className="rounded-2xl mx-auto bg-gray-50 overflow-hidden h-3/4 flex items-center max-w-[90%]">
				<Image
					src={image}
					alt={title || "product image"}
					width={300}
					height={300}
					className="rounded-2xl overflow-hidden object-contain object-center h-full"
				/>
			</div>
			{/* <h3
				className={`text-lg md:text-2xl text-gray-800 font-bold text-center w-3/4 uppercase line-clamp-1 transition duration-300 ease-in-out`}
				title={title}
			>
				{title}
			</h3> */}
			<div className="self-start flex flex-col items-center text-center w-3/4 mx-auto">
				<h3 className="text-md font-bold text-gray-700">{title}</h3>
				<p className="text-sm text-gray-500">{generalCategory}</p>
			</div>
		</div>
	);
};

export default ProductCard;

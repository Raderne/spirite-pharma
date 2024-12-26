"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

const LoadingSkeleton = () => {
	useGSAP(() => {
		// Circle 1
		gsap.fromTo(
			"#circle-1",
			{
				top: "-120%",
				left: "-20%",
				duration: 2,
				repeat: -1,
				yoyo: true,
			},
			{
				top: "-100%",
				left: "-10%",
				duration: 2,
				repeat: -1,
				yoyo: true,
			},
		);

		// Circle 2
		gsap.to("#circle-2", {
			top: "-100%",
			left: "-55%",
			duration: 2,
			repeat: -1,
			yoyo: true,
		});

		// Circle 3
		gsap.to("#circle-3", {
			top: "-90%",
			left: "-20%",
			duration: 2,
			repeat: -1,
			yoyo: true,
		});
	}, []);

	return (
		<div className="relative">
			<div
				className="absolute rounded-[100%] w-full h-[200%] -top-[120%] -left-[20%] -z-30 bg-gradient-to-br from-emerald-400 via-emerald-200 to-sky-100"
				id="circle-1"
			></div>
			<div
				className="absolute rounded-[100%] w-full h-[200%] -top-[90%] -left-[50%] -z-20 bg-gradient-to-r from-sky-300 via-sky-100 to-white"
				id="circle-2"
			></div>
			<div
				className="absolute rounded-[100%] w-full h-[230%] -top-[70%] -left-[30%] -z-10 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-200 opacity-75"
				id="circle-3"
			></div>
			<div className="flex flex-col items-end z-50">
				<h1 className="text-2xl md:text-6xl font-bold text-white">
					Spirit
					<span className="text-text-primary-blue ml-12">Pharma</span>
				</h1>
				<h1 className="text-text-primary-blue text-2xl md:text-6xl font-bold">
					France
				</h1>
			</div>
		</div>
	);
};

export default LoadingSkeleton;

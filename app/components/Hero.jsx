import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = async (props) => {
	const {
		font: { instrumentSerif, playfair },
	} = props;

	return (
		<div className="relative w-full h-full overflow-hidden">
			<video
				autoPlay
				loop
				muted
				contextMenu="false"
				className="w-full h-full object-cover absolute inset-0"
			>
				<source
					src="/spiritpharmafrance-video.mp4"
					type="video/mp4"
				/>
			</video>
			<section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:pb-8 ">
				<div className="my-4 flex gap-y-12 h-full min-h-screen relative">
					<video
						autoPlay
						loop
						muted
						contextMenu="false"
						className="w-full h-full object-cover"
					>
						<source
							src="/spiritpharmafrance-video.mp4"
							type="video/mp4"
						/>
					</video>
					<div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center rounded-2xl">
						<div className="">
							<h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight lg:text-[10rem] lg:leading-none xl:text-[11rem] xl:leading-none flex flex-col items-center select-none">
								<span
									className={`block ${instrumentSerif.className} text-white`}
								>
									SPIRIT PHARMA
								</span>
								<span
									className={`block ${playfair.className} text-body-background-light-blue lg:leading-[0.5] lg:text-[11rem] xl:text-[12rem] tracking-widest `}
								>
									FRANCE
								</span>
							</h1>
						</div>
						{/* <div className="px-4 md:px-0 md:w-2/3">
							<p className="text-base font-medium text-justify text-gray-500 lg:text-xl lg:mt-4 lg:leading-9 lg:text-center">
								Spirit Pharma France a pour vocation le développement de
								compléments alimentaires et des produits dermo-cosmétiques de
								soin ou d’hygiène pour le visage et le corps. 
							</p>
						</div> */}

						<div className="w-full px-4 sm:px-0 flex items-center justify-center sm:w-2/3">
							<Button className="md:w-1/2 sm:w-auto bg-body-background-light-blue hover:bg-button-secondary-light-blue-hover text-gray-900 text-lg sm:text-xl font-semibold px-4 py-8 rounded-2xl">
								<Link
									href="/boutique"
									className="w-full"
								>
									Découvrir Notre Boutique
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;

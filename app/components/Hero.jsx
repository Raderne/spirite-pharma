import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/app/images/placeholder.png";
import Image from "next/image";

const Hero = async (props) => {
	const {
		font: { instrumentSerif, playfair },
	} = props;

	return (
		<div className="relative w-full h-full overflow-hidden max-sm:bg-black/85">
			<video
				autoPlay
				loop
				muted
				contextMenu="false"
				className="w-full h-full object-cover absolute inset-0 max-sm:hidden"
			>
				<source
					src="/spiritpharmafrance-video.mp4"
					type="video/mp4"
				/>
			</video>
			<section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:pb-8">
				<div className="h-full relative sm:p-5 sm:bg-black rounded-xl max-sm:min-h-[60vh]">
					<video
						autoPlay
						loop
						muted
						contextMenu="false"
						className="w-full h-full object-cover rounded-xl max-sm:hidden"
					>
						<source
							src="/spiritpharmafrance-video.mp4"
							type="video/mp4"
						/>
					</video>
					<div className="absolute bg-blend-screen inset-0 sm:bg-black/65 flex flex-col items-center justify-center gap-y-10 rounded-2xl">
						<div className="w-full flex flex-col items-center justify-center max-w-2xl sm:w-2/3">
							{/* <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight lg:text-[10rem] lg:leading-none xl:text-[11rem] xl:leading-none flex flex-col items-center select-none">
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
							</h1> */}
							<Image
								src={Logo}
								alt="Spirit Pharma France"
								width={500}
								height={500}
								className="object-contain w-full h-full"
							/>
						</div>
						<div className="px-4 md:px-0 md:w-2/3">
							<p className="text-base font-medium text-justify text-gray-100 lg:text-xl lg:mt-4 lg:leading-9 lg:text-center">
								Spirit Pharma France a pour vocation le développement de
								compléments alimentaires et des produits dermo-cosmétiques de
								soin ou d’hygiène pour le visage et le corps. 
							</p>
						</div>

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

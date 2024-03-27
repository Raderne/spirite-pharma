import React, { Suspense } from "react";
import { Space_Grotesk } from "next/font/google";
import PagesFooter from "@/app/components/PagesFooter";
import { GoGoal } from "react-icons/go";
import { FaArrowsToEye } from "react-icons/fa6";
import { LiaListAlt } from "react-icons/lia";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const AboutPage = () => {
  return (
    <div className="bg-slate-100 min-h-screen pb-4">
      <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-white min-h-screen lg:pb-8 lg:pt-24 mb-12">
        <h1
          className={`text-xl md:text-5xl block font-semibold text-center select-none ${spaceGrotesk.className}`}
        >
          À propos de
          <span className="text-[#6abfd4]"> Spirit </span>
          <span className=" text-text-primary-blue">Pharma</span>
          <span className="text-button-primary"> France</span>
        </h1>
        <div className="w-40 h-1 bg-button-primary mx-auto my-4 mb-10"></div>
        <div className="md:grid grid-cols-1 md:grid-cols-6 w-full gap-x-4">
          <div className="order-1 col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 p-4 flex flex-col gap-y-3">
              <h2 className="text-lg md:text-2xl font-bold mb-3">
                À propos de Spirit Pharma France :
              </h2>
              <p className="text-md md:text-lg ml-4">
                Spirit Pharma France a pour vocation le développement de
                compléments alimentaires et des produits dermo-cosmétiques de
                soin ou d&apos;hygiène pour le visage et le corps.
                <br />
                <br />
                C&apos;est en se concentrant sur la recherche de nouveaux actifs
                100% naturels, d&apos;origine végétale que nous nous efforçons
                chaque jour de faire ce qui importe le plus aux patients:
                accélérer l&apos;accès au traitement et trouver des solutions
                pour répondre aux besoins non -satisfaits.
                <br />
                <br />
                Nos patients font confiance à nos produits, et nous croyons que
                cette confiance doit être gagnée chaque jour. Nous nous
                rappelons sans cesse que les intérêts de nos patients doivent
                toujours venir en premier, ce qui nous pousse à la recherche
                continue de l&apos;excellence.
                <br />
                <br />
                Pour Spirit Pharma France, la santé et le bien-être sont
                d&apos;une importance cruciale, c&apos;est pourquoi et grâce à
                son R&D, le laboratoire se maintient à la pointe de la recherche
                scientifique offrant des produits de qualité prouvée et reconnue
                par le corps médical et pharmaceutique. Ainsi, nous intervenons
                dans plusieurs domaines notamment la dermatologie, la
                gynécologie, la pédiatrie et autres.
              </p>
            </div>
          </div>

          <div className="order-2 col-span-2 p-4 flex flex-col gap-y-3">
            <h2 className="text-lg md:text-2xl font-bold mb-3">
              Nos Valeurs :
            </h2>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold text-text-primary-blue">
                Qualité :
              </span>{" "}
              Nous nous engageons à fournir des produits de qualité à nos
              clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold text-text-primary-blue">
                Sécurité :
              </span>{" "}
              Nous nous engageons à fournir des produits sûrs à nos clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold text-text-primary-blue">
                Efficacité :
              </span>{" "}
              Nous nous engageons à fournir des produits efficaces à nos
              clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold text-text-primary-blue">
                Abordabilité :
              </span>{" "}
              Nous nous engageons à fournir des produits abordables à nos
              clients.
            </p>
          </div>

          <div className="order-3 col-span-6 w-40 h-1 bg-button-primary mx-auto my-4 mb-10"></div>

          <div className="order-4 col-span-6 p-4 flex flex-col gap-y-3">
            <h2 className="text-lg md:text-2xl font-bold mb-3 text-text-primary-blue">
              <GoGoal className="text-3xl md:text-4xl inline-block mr-2 md:mr-4" />
              Notre Mission :
            </h2>
            <p className="text-md md:text-lg ml-4">
              Notre mission est de fournir des médicaments de qualité à des prix
              abordables.
              <br />
              Nous respectons les normes les plus élevées d&apos;intégrité et de
              transparence dans toutes nos interactions avec nos partenaires.
            </p>

            <h2 className="text-lg md:text-2xl font-bold mb-3 text-text-primary-blue">
              <FaArrowsToEye className="text-3xl md:text-4xl inline-block mr-2 md:mr-4" />
              Notre Vision :
            </h2>
            <p className="text-md md:text-lg ml-4">
              Notre vision est de devenir le leader de la distribution
              pharmaceutique en France.
            </p>

            <h2 className="text-lg md:text-2xl font-bold mb-3 text-text-primary-blue">
              <LiaListAlt className="text-3xl md:text-4xl inline-block mr-2 md:mr-4" />
              Nos Objectifs :
            </h2>

            <p className="text-md md:text-lg ml-4">
              <span className="font-bold">1. Qualité :</span> Fournir des
              produits de qualité à nos clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold">2. Sécurité :</span> Fournir des
              produits sûrs à nos clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold">3. Efficacité :</span> Fournir des
              produits efficaces à nos clients.
            </p>
            <p className="text-md md:text-lg ml-4">
              <span className="font-bold">4. Abordabilité :</span> Fournir des
              produits abordables à nos clients.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl ">
        <PagesFooter />
      </div>
    </div>
  );
};

export default AboutPage;

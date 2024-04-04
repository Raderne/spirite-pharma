"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import ProductInfoDrawer from "@/app/components/ProductInfoDrawer";
import PagesFooter from "@/app/components/PagesFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const CookiesPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen pb-4">
      <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-white min-h-screen lg:pb-8 lg:pt-24 mb-12">
        <h1
          className={`text-xl md:text-5xl block font-semibold text-center select-none ${spaceGrotesk.className}`}
        >
          Politique relative aux
          <span className="text-teal-300"> cookies </span>
        </h1>

        <p className=" text-md md:text-lg ml-4 mt-8 text-gray-600">
          Les cookies sont de petits morceaux de texte envoyés par nos serveurs
          à votre ordinateur ou appareil lorsque vous accédez à nos services.
          Ils sont stockés dans votre navigateur et renvoyés ultérieurement à
          nos serveurs afin que nous puissions fournir un contenu contextuel.
          Sans les cookies, l’utilisation du Web serait une expérience beaucoup
          plus frustrante. Nous les utilisons pour soutenir vos activités sur
          notre site web. Par exemple, votre session (pour ne pas avoir à vous
          reconnecter) ou votre panier.
        </p>

        <p className=" text-md md:text-lg ml-4 mt-4 text-gray-600">
          Les cookies sont également utilisés pour nous aider à comprendre vos
          préférences en fonction de l’activité précédente ou actuelle sur notre
          site Web (les pages que vous avez visitées), votre langue et votre
          pays, ce qui nous permet de vous fournir des services améliorés. Nous
          utilisons également des cookies pour nous aider à compiler des données
          agrégées sur le trafic du site et l’interaction du site afin que nous
          puissions offrir de meilleures expériences et outils sur le site à
          l’avenir.
        </p>

        <p className=" text-md md:text-lg ml-4 mt-4 text-gray-600">
          Voici un aperçu des cookies susceptibles d’être déposés sur votre
          terminal lorsque vous visitez notre site internet :
        </p>

        <div className="ml-4 mt-8 flex flex-col gap-y-4">
          <ProductInfoDrawer
            title="Session & Securité"
            text="Authentifier les utilisateurs, protéger les données des utilisateurs et permettre au site Web de fournir les services attendus par les utilisateurs, comme la conservation du contenu de leur panier ou l’autorisation de télécharger des fichiers.
            <br /><br />Le site Web ne fonctionnera pas correctement si vous rejetez ou supprimez ces cookies."
          />
          <ProductInfoDrawer
            title="Préférences"
            text="Souvenez-vous des informations sur l’apparence ou le comportement préféré du site Web, comme votre langue ou votre préférée.<br /><br />Votre expérience peut être dégradée si vous supprimez ces cookies, mais le site Web fonctionnera toujours."
          />
          <ProductInfoDrawer
            title="Historique des interactions"
            text="Utilisé pour collecter des informations sur vos interactions avec le site web, les pages que vous avez vues, et toute campagne de marketing spécifique qui vous a amené sur le site web.<br /><br />Nous ne pourrons peut-être pas vous fournir le meilleur service si vous refusez ces cookies, mais le site web fonctionnera."
          />
          <ProductInfoDrawer
            title="Publicité & Marketing"
            text="Utilisé pour rendre la publicité plus attrayante pour les utilisateurs et plus précieuse pour les éditeurs et les annonceurs, tels que la fourniture d’annonces plus pertinentes lorsque vous visitez d’autres sites web qui affichent des annonces ou pour améliorer les rapports sur les performances des campagnes publicitaires.<br /><br />Notez que certains services tiers peuvent installer des cookies supplémentaires sur votre navigateur afin de vous identifier.<br /><br />Vous pouvez refuser l’utilisation de cookies par un tiers en visitant le Page de désactivation de la Network Advertising Initiative . Le site Web fonctionnera toujours si vous rejetez ou supprimez ces cookies.
            "
          />
          <ProductInfoDrawer
            title="Analytique"
            text="Comprenez comment les visiteurs interagissent avec notre site Web, via Google Analytics. En savoir plus sur <a href='https://developers.google.com/analytics/resources/concepts/gaConceptsCookies?hl=en' style='color: teal; text-decoration: underline;' >Cookies analytiques et informations de confidentialité</a>.<br /><br />Le site Web fonctionnera toujours si vous rejetez ou supprimez ces cookies.
            "
          />
        </div>
        <p className=" text-md md:text-lg ml-4 mt-4 text-gray-600">
          Vous pouvez choisir que votre ordinateur vous avertisse à chaque envoi
          de cookie, ou vous pouvez choisir de désactiver tous les cookies.
          Chaque navigateur est un peu différent, consultez donc le menu Aide de
          votre navigateur pour savoir comment modifier correctement vos
          cookies. <br />
          <br /> Nous ne prenons actuellement pas en charge les signaux Do Not
          Track, car il n’existe aucune norme industrielle de conformité.
        </p>
      </div>
      <div className="mx-3 md:mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl xl:max-w-screen-xl bg-body-background-dark-blue text-white py-8 mb-12 rounded-xl ">
        <PagesFooter />
      </div>
    </div>
  );
};

export default CookiesPage;

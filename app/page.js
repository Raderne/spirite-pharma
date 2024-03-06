import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import PreferredProducts from "./components/PreferredProducts";

import { Instrument_Serif, Playfair } from "next/font/google";

export const dynamic = "force-dynamic";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  preload: false,
  weight: ["400"],
});

const playfair = Playfair({
  subsets: ["latin"],
  preload: false,
  weight: "400",
});

export default function Home() {
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-0">
      <Hero font={{ instrumentSerif, playfair }} />
      <PreferredProducts font={instrumentSerif} />
      <NewProducts key={"NewProducts"} font={{ instrumentSerif, playfair }} />
    </div>
  );
}

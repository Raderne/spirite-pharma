import Hero from "./components/Hero";
import PreferredProducts from "./components/PreferredProducts";

export default function Home() {
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <PreferredProducts />
    </div>
  );
}

import Card from "./components/Card/Card";
import Brands from "./components/Home/Brands";
import HeroSection from "./components/Home/HeroSection";
import MapSection from "./components/Home/MapSection";
import QuotationSection from "./components/Home/QuotationSection";
import { cardDetails } from "./data/heroCardDetails";
export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <div className="w-full bg-lightColor dark:bg-darkColor">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5 pt-10 pb-10 max-w-[1240px] mx-auto px-5">
          {cardDetails.map((card) => (
            <Card
              key={card.id}
              path={card.path}
              img={card.img}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <div className="bg-lightColor text-darkColor dark:bg-darkColor dark:text-lightColor bg-[url('/superheat-black.png')] dark:bg-[url('/superheat-white.png')] bg-contain bg-center bg-s bg-no-repeat">
        <QuotationSection />
      </div>
      <div className="">
        <Brands />
      </div>
      <div className="text-darkColor dark:text-lightColor">
        {/* <MapSection /> */}
      </div>
    </section>
  );
}

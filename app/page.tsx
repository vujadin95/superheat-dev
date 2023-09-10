import Card from "./components/Card/Card";
import Brands from "./components/Home/Brands";
import HeroSection from "./components/Home/HeroSection";
import Map from "./components/Home/Map";
import QuotationSection from "./components/Home/QuotationSection";
import { cardDetails } from "./data/heroCardDetails";
export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <div className="flex flex-wrap gap-5 pt-10 pb-10 max-w-[1240px] mx-auto px-5">
        {cardDetails.map((card) => (
          <Card
            key={card.id}
            path={card.path}
            img={card.img}
            title={card.title}
          />
        ))}
      </div>
      <div className="bg-neutral">
        <QuotationSection />
      </div>
      <div>
        <Brands />
      </div>
      <div className="bg-primary text-neutral">
        <Map />
      </div>
    </section>
  );
}

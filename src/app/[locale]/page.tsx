import { useTranslations } from "next-intl";
import Card from "../components/Card/Card";
import Brands from "../components/Home/Brands";
import HeroSection from "../components/Home/HeroSection";
import MapSection from "../components/Home/MapSection";
import QuotationSection from "../components/Home/QuotationSection";
import { cardDetails } from "../data/heroCardDetails";

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <section>
      <HeroSection />
      <div className="w-full bg-lightColor dark:bg-darkColor">
        <div className="max-w-[1240px] py-10 md:py-20 px-3 md:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* <Card img={cardDetails[0].img} path={cardDetails[0].path} title={cardDetails[0].title} /> */}
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
      <Brands />
      <div className="text-darkColor dark:text-lightColor">
        <MapSection />
      </div>
    </section>
  );
}

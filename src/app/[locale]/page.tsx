import { useTranslations } from "next-intl";
import Card from "../components/Card/Card";
import Brands from "../components/Home/Brands";
import HeroSection from "../components/Home/HeroSection";
import MapSection from "../components/Home/MapSection";
import QuotationSection from "../components/Home/QuotationSection";

export default function Home() {
  const t = useTranslations("");
  const cardDetailsKeys = ["aboutUs", "optimizationSystem", "portfolio"];
  const cardDetailsContent = cardDetailsKeys.map((item) => ({
    id: t(`HomePage.heroCardDetails.${item}.id`),
    title: t(`HomePage.heroCardDetails.${item}.title`),
    path: t(`HomePage.heroCardDetails.${item}.path`),
    imgPath: t(`HomePage.heroCardDetails.${item}.imgPath`),
    buttonText: t(`HomePage.heroCardDetails.${item}.buttonText`),
  }));
  return (
    <section>
      <HeroSection />
      <div className="w-full bg-lightColor dark:bg-darkColor">
        <div className="max-w-[1240px] py-10 md:py-20 px-3 md:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardDetailsContent.map((card) => (
            <Card
              key={card.id}
              path={card.path}
              img={card.imgPath}
              title={card.title}
              buttonText={card.buttonText}
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

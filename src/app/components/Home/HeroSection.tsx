import { useTranslations } from "next-intl";
import BackgroundImage from "./BackgroundImage";
import HeroTelephone from "./HeroTelephone";
import TypeWriterText from "./TypeWriterText";

const HeroSection = () => {
  const t = useTranslations("HomePage.HeroSection.writtableStrings");
  const keys = ["stringOne", "stringTwo", "stringThree", "stringFour"];
  const writtableStrings = keys.map((key) => t(`${key}.value`));
  return (
    <section className="relative w-full h-[600px] flex flex-col items-start">
      <BackgroundImage
        imagePath="/assets/hero.jpg"
        altText="slika na pocetnoj stranici"
      />
      <div className="w-full h-[600px] bg-primary/20 z-20">
        <div className="max-w-[1240px] mx-auto flex flex-col p-10 justify-between md:justify-center h-full px-3 sm:px-5">
          <TypeWriterText writtableStrings={writtableStrings} />
          <HeroTelephone />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

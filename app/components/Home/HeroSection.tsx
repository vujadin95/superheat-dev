import BackgroundImage from "./BackgroundImage";
import HeroTelephone from "./HeroTelephone";
import TypeWriterText from "./TypeWriterText";
const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex flex-col items-start">
      <BackgroundImage />
      <div className="w-full h-[500px] bg-primary/20 z-20">
        <div className="max-w-[1240px] mx-auto flex flex-col p-10 justify-between md:justify-center h-full px-3 sm:px-5">
          <TypeWriterText />
          <HeroTelephone />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

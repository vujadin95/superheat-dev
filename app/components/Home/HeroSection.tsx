import BackgroundImage from "./BackgroundImage";
import HeroTelephone from "./HeroTelephone";
import TypeWriterText from "./TypeWriterText";
const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex flex-col items-start">
      <BackgroundImage />
      <div className="w-full h-[500px] bg-neutral/30 z-20">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full  px-5">
          <TypeWriterText />
          <HeroTelephone />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

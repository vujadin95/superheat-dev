import Image from "next/image";

const BackgroundImage = () => {
  return (
    <>
      <Image
        src={"/assets/hero.jpg"}
        fill
        priority={true}
        sizes="(max-width: 1140px) 100vw"
        alt="some"
        className="fixed object-cover "
      />
    </>
  );
};
export default BackgroundImage;

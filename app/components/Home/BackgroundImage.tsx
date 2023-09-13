import Image from "next/image";

const BackgroundImage = () => {
  return (
    <>
      <Image
        src={"/assets/hero.jpg"}
        fill
        priority={true}
        alt="some"
        className="fixed object-cover "
      />
    </>
  );
};
export default BackgroundImage;

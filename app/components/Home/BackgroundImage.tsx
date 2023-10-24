import Image from "next/image";
interface PropTypes {
  imagePath: string;
  altText: string;
}
const BackgroundImage = ({ imagePath, altText }: PropTypes) => {
  return (
    <>
      <Image
        src={imagePath}
        fill
        priority={true}
        sizes="(max-width: 1140px) 100vw"
        alt={altText}
        className="fixed object-cover"
      />
    </>
  );
};
export default BackgroundImage;

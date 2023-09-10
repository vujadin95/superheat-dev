import Link from "next/link";
import Image from "next/image";
interface BrandType {
  path: string;
  img: string;
  brandName: string;
}
const Brand = ({ path, brandName, img }: BrandType) => {
  return (
    <Link
      href={path}
      className="flex flex-1 flex-col items-center relative min-w-[150px]"
    >
      <Image src={img} alt={brandName} width={200} height={200} />
      <p>{brandName}</p>
    </Link>
  );
};

export default Brand;

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
      className="bg-lightColor text-darkColor flex flex-col items-center hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition duration-300 hover:rounded-sm hover:scale-110"
    >
      <div className="w-[140px] h-[120px] relative">
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 140px) 100vw"
          className="object-contain h-full w-full"
        />
      </div>
      <p className="font-semibold">{brandName}</p>
    </Link>
  );
};

export default Brand;

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
      // as={"image"}
      href={path}
      className="max-w-[140px] w-full rounded-md text-darkColor dark:text-lightColor flex shadow-xl flex-col items-center transition duration-200 hover:scale-110 overflow-hidden bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      <div className="w-full h-[100px] relative">
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 140px) 100vw"
          className="object-scale-down"
        />
      </div>
      <p className="w-full text-center py-1 font-semibold text-sm sm:text-base">
        {brandName}
      </p>
    </Link>
  );
};

export default Brand;

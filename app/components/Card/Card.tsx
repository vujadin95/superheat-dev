import Link from "next/link";
import { HeroCardType } from "./card.types";
import Image from "next/image";

const Card = ({ img, path, title }: HeroCardType) => {
  return (
    <Link
      href={path}
      className="max-w-[375px] w-full relative rounded-md shadow-lg transition-all ease-in duration-200 hover:scale-105 overflow-hidden group bg-zinc-200"
    >
      <div className="p-2 relative h-[360px]">
        <Image
          src={img}
          alt={`${title}`}
          fill
          sizes="(max-width: 400px) 100vw"
          className="object-cover rounded-md rounded-b-none"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center px-4 pb-3 w-full h-full text-darkColor bg-zinc-300 group-hover:bg-zinc-200 dark:bg-zinc-700 dark:group-hover:bg-zinc-600 dark:text-lightColor transition-colors duration-150">
        <h3 className="py-2 text-lg sm:text-2xl text-center">{title}</h3>
        <button className="px-4 py-1 font-semibold bg-darkColor text-lightColor rounded-lg hover:bg-lightColor hover:text-darkColor transition-color duration-200 shadow-md">
          Saznajte
        </button>
      </div>
    </Link>
  );
};
export default Card;

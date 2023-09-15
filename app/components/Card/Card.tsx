import Link from "next/link";
import { CardType } from "./card.types";
import Image from "next/image";

const Card = ({ img, path, title }: CardType) => {
  return (
    <Link
      as={"image"}
      href={path}
      className="max-w-[375px] w-full relative rounded-md shadow-lg transition-all ease-in duration-200 hover:scale-105 overflow-hidden group"
    >
      <div className="p-2 relative h-[360px]">
        <Image
          src={img}
          alt={`${title}`}
          fill
          sizes="(max-width: 400px) 100vw"
          className="object-cover rounded-md rounded-b-none"
        />
      </div>

      <div className="flex flex-col items-center px-4 pb-3 w-full text-darkColor bg-zinc-300 group-hover:bg-zinc-200 dark:bg-zinc-700 dark:group-hover:bg-zinc-600 dark:text-lightColor transition-colors duration-150">
        <h3 className="py-2 text-lg sm:text-2xl">{title}</h3>
        <button className="px-4 py-1 font-semibold bg-darkColor text-lightColor rounded-lg hover:bg-lightColor hover:text-darkColor transition-color duration-200 shadow-md">
          Saznajte
        </button>
      </div>
    </Link>
  );
};
export default Card;

/*
<Image
        src={img}
        alt={`${title}`}
        fill
        sizes="(max-width: 600px) 100vw"
        className="object-cover bg-center hover:scale-110 transition duration-300"
      />

      <div className="z-20 absolute bottom-0 w-full bg-darkColor text-lightColor dark:bg-lightColor dark:text-darkColor flex flex-col gap-2 justify-center items-center py-4 translate-y-12 group-hover/show:translate-y-0 group-hover/show:bg-sky-500 transition duration-300">
        <h3 className="py-2 text-2xl">{title}</h3>
        <button className=" px-4 py-1 font-semibold bg-primary text-neutral rounded-2xl hover:bg-neutral hover:text-primary transition-colors duration-300">
          Saznajte
        </button>
      </div>
*/

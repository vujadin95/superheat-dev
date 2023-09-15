import Link from "next/link";
import { CardType } from "./card.types";
import Image from "next/image";

const Card = ({ img, path, title }: CardType) => {
  return (
    <Link
      as={"image"}
      href={path}
      className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105 "
    >
      <div className="p-2 relative max-w-[200px]: h-[250px]">
        <Image
          src={img}
          alt={`${title}`}
          fill
          sizes="(max-width: 600px) 100vw"
          className="object-contain sm:object-cover"
        />
      </div>

      <div className="px-4 pb-3">
        <div>
          <h3 className="py-2 text-2xl">{title}</h3>
          <button className=" px-4 py-1 font-semibold bg-primary text-neutral rounded-2xl hover:bg-neutral hover:text-primary transition-colors duration-300">
            Saznajte
          </button>
        </div>
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

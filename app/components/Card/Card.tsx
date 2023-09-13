import Link from "next/link";
import { CardType } from "./card.types";
import Image from "next/image";

const Card = ({ img, path, title }: CardType) => {
  return (
    <Link
      href={path}
      className="flex-1 min-w-[300px] relative h-[450px] group/show overflow-hidden"
    >
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
    </Link>
  );
};
export default Card;

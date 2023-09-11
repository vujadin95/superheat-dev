import Link from "next/link";
import { CardType } from "./card.types";
import Image from "next/image";

const Card = ({ img, path, title }: CardType) => {
  return (
    <Link
      href={path}
      className="bg-neutral flex-1 min-w-[300px] relative h-[450px] group/show overflow-hidden"
    >
      <Image
        src={img}
        alt={`${title}`}
        fill
        sizes="(max-width: 600px) 100vw"
        className="object-cover bg-center hover:scale-110 transition duration-300"
      />
      {/* <div className="w-full h-full z-10 absolute  group-hover/show:bg-neutral/30 transition-colors duration-300"></div> */}
      <div className="z-20 absolute bottom-0 w-full bg-neutral text-primary flex flex-col gap-2 justify-center items-center py-4 translate-y-12 group-hover/show:translate-y-0 group-hover/show:bg-secondary transition duration-300">
        <h3 className="py-2 text-2xl">{title}</h3>
        <button className=" px-4 py-1 bg-primary text-neutral rounded-2xl hover:bg-neutral hover:text-primary transition-colors duration-300">
          Saznajte
        </button>
      </div>
    </Link>
  );
};
export default Card;

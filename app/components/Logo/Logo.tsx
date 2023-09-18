import Link from "next/link";
import Image from "next/image";
import logoBlack from "@/public/superheat-black.png";
import logoLight from "@/public/superheat-white.png";

const Logo = () => {
  return (
    <Link
      className="relative flex w-full max-w-[180px] min-[502px]:max-w-[250px] items-center justify-center h-[50px]"
      href={"/"}
    >
      <Image
        src={logoBlack}
        alt="Superheat Logo"
        fill
        sizes="(max-width: 250px) 100vw"
        className="dark:hidden object-contain"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo"
        fill
        sizes="(max-width: 250px) 100vw"
        className="hidden dark:block object-contain"
      />
    </Link>
  );
};
export default Logo;

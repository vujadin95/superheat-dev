import Link from "next/link";
import Image from "next/image";
import logoBlack from "../../../public/superheat-black.png";
import logoLight from "../../../public/superheat-white.png";

const Logo = () => {
  return (
    <Link className="flex items-center justify-center h-[60px]" href={"/"}>
      <Image
        src={logoBlack}
        alt="Superheat Logo"
        width={250}
        height={50}
        className="dark:hidden"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo"
        width={250}
        height={50}
        className="hidden dark:block"
      />
    </Link>
  );
};
export default Logo;

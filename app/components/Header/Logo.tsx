import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/superheat.png";

const Logo = () => {
  return (
    <Link
      className="flex items-center justify-center bg-primary px-3 py-1 h-[65px]"
      href={"/"}
    >
      <Image src={logo} alt="Superheat Logo" width={250} height={50} />
    </Link>
  );
};
export default Logo;

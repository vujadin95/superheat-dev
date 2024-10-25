"use client";
// import Link from "next/link";
import { Link } from "@/src/i18n/routing";
import { NavLinkType } from "./navlink.types";
import { usePathname } from "next/navigation";

const NavLink = ({ linkLabel, path, styleClass }: NavLinkType) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${styleClass} ${pathname === path ? "text-red-500" : ""}`}
      href={path}
    >
      {linkLabel}
    </Link>
  );
};
export default NavLink;

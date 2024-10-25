"use client";
// import Link from "next/link";
import { Link } from "@/src/i18n/routing";
import { NavLinkType } from "./navlink.types";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ linkLabel, path, styleClass }: NavLinkType) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === path;
  return (
    <Link
      className={`${styleClass} ${isActive ? "text-red-500" : ""}`}
      href={path}
    >
      {linkLabel}
    </Link>
  );
};
export default NavLink;

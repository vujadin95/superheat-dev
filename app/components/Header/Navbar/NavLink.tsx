import Link from "next/link";
import { NavLinkType } from "./navlink.types";
const NavLink = ({ linkLabel, path, styleClass }: NavLinkType) => {
  return (
    <Link className={`${styleClass}`} href={path}>
      {linkLabel}
    </Link>
  );
};
export default NavLink;

import Link from "next/link";
import NavLink from "./NavLink";
import { navigationLinks } from "@/app/data/navigationLinks";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-5">
      {navigationLinks.map((link) => (
        <NavLink
          styleClass="uppercase tracking-wide font-semibold hover:text-sky-500"
          key={link.id}
          path={link.path}
          linkLabel={link.linkLabel}
        />
      ))}
    </nav>
  );
};
export default Navbar;

import NavLink from "./NavLink";
import { navigationLinks } from "@/app/data/navigationLinks";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center ml-auto mr-2">
      {navigationLinks.map((link) => (
        <NavLink
          styleClass="uppercase tracking-wide font-semibold px-3 py-[6px] rounded-sm hover:bg-sky-400 hover:text-neutral transition-color duration-150"
          key={link.id}
          path={link.path}
          linkLabel={link.linkLabel}
        />
      ))}
    </nav>
  );
};
export default Navbar;

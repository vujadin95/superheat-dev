import { useTranslations } from "next-intl";
import NavLink from "./NavLink";

const Navbar = () => {
  const t = useTranslations('navigationLinks');

  // add all main link names here and in messages (lang).json
  const linkNames = ['about-us', 'portfolio', 'whySuperheat', 'optimizationSystem', 'contact'];


  return (
    <nav className="mobile-navigation hidden shrink-0 md:flex items-center ml-auto">
      {linkNames.map((linkName) => (
        <NavLink
          styleClass=" text-sm lg:text-base lg:tracking-wide font-semibold lg:px-3 px-[6px] py-[6px] rounded-sm dark:hover:bg-zinc-600 hover:bg-zinc-200 transition-color duration-150 md:ml-auto"
          key={t(`${linkName}.id`)}
          path={t(`${linkName}.path`)}
          linkLabel={t(`${linkName}.label`)}
        />
      ))}
    </nav>
  );
};
export default Navbar;

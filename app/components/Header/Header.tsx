import Navbar from "./Navbar/Navbar";
import Logo from "./Logo";
import ThemeSwitcher from "../ThemeSwither/ThemeSwitcher";
import ToggleThemeButton from "../ThemeSwither/ToggleThemeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1240px] px-5 mx-auto h-[60px] ">
      <Logo />
      <Navbar />
      {/* <ThemeSwitcher /> */}
      <ToggleThemeButton />
    </header>
  );
};
export default Header;

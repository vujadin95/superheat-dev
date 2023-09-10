import Navbar from "./Navbar/Navbar";
import Logo from "./Logo";
import ThemeSwitcher from "../ThemeSwither/ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1240px] px-5 mx-auto h-[75px] ">
      <Logo />
      <Navbar />
      {/* <ThemeSwitcher /> */}
    </header>
  );
};
export default Header;

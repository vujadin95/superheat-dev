import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="min-h-[450px] flex justify-between items-center max-w-[1240px] mx-auto px-5">
      <div className="flex flex-col gap-3 max-w-[300px]">
        <Logo />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          expedita?
        </p>
      </div>
      <div>
        <p>Kontakt</p>
      </div>
    </footer>
  );
};
export default Footer;

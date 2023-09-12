import NavLink from "../Header/Navbar/NavLink";
import { ImMobile } from "react-icons/im";
const HeroTelephone = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-4">
      <div className="w-full flex items-center gap-3 ">
        <a
          href="tel:+381652007778"
          className="w-[170px] text-center py-[10px] bg-terniary rounded-sm hover:bg-secondary"
        >
          Pozovite nas
        </a>
        <a
          href="tel:+381652007778"
          className="text-primary font-semibold flex items-center gap-2"
        >
          <ImMobile />
          <p>+381 65 200 77 78</p>
        </a>
      </div>
      <div className="w-full flex items-center gap-3 ">
        <a
          href="tel:+381649255454"
          className="w-[170px] text-center py-[10px] bg-terniary rounded-sm hover:bg-secondary"
        >
          Kako do ušteda?
        </a>
        <a
          href="tel:+381649255454"
          className="text-primary font-semibold flex items-center gap-2"
        >
          <ImMobile />
          <p>+381 64 925 54 54</p>
        </a>
      </div>
    </div>
  );
};
export default HeroTelephone;

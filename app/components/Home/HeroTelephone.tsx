import NavLink from "../Header/Navbar/NavLink";
import { ImMobile } from "react-icons/im";
const HeroTelephone = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-4">
      <div className="w-full flex items-center gap-3 ">
        <NavLink
          path="/kontakt"
          linkLabel="Pozovite nas"
          styleClass="w-[170px] text-center py-[10px] bg-terniary rounded-sm hover:bg-secondary"
        />
        <div className="text-primary font-semibold flex items-center gap-2">
          <ImMobile />
          <p>+381 65 200 77 78</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-3 ">
        <NavLink
          path="/kontakt"
          linkLabel="Kako do ušteda?"
          styleClass="w-[170px] text-center py-[10px] bg-terniary rounded-sm hover:bg-secondary"
        />
        <div className="text-primary font-semibold flex items-center gap-2">
          <ImMobile />
          <p>+381 64 925 54 54</p>
        </div>
      </div>
    </div>
  );
};
export default HeroTelephone;

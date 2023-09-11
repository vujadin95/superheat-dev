import DynamicMap from "../Map";
import Image from "next/image";

const MapSection = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1240px] mx-auto px-5 py-10">
      <div className="">
        <Image
          src={"/superheat.png"}
          width={200}
          height={150}
          className="object-cover w-full h-full"
          alt="logo"
        />
        <div className="border-b-2 border-gray-300 pt-3 pb-1 text-sm">
          <h2 className="font-semibold tracking-wider pb-1 text-lg">
            Kragujevac
          </h2>
          <p>Tel: +381 65 200 77 78</p>
          <p>m.popovic@superheat.rs</p>
        </div>
        <div className="border-b-2 border-gray-300 pt-3 pb-1">
          <h2 className="font-semibold tracking-wider pb-1 text-lg">
            Srnje - Kruševac
          </h2>
          <p>Tel: +381 64 925 54 54</p>
          <p>n.milojevic@superheat.rs</p>
        </div>
        <div className="border-b-2 border-gray-300 border-c pt-3 pb-1">
          <h2 className="font-semibold tracking-wider pb-1 text-lg">Čačak</h2>
          <p>Tel. +381 65 200 77 78</p>
          <p>info@superheat.rs</p>
        </div>
      </div>
      <div className=" z-20 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition duration-300 max-w-2xl">
        <DynamicMap />
      </div>
    </div>
  );
};
export default MapSection;
// rgba(255,255,255,0.2)

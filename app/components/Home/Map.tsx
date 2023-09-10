import Image from "next/image";

const Map = () => {
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-5 py-4">
      <div>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, vitae?
        </h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, vitae?
        </h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, vitae?
        </h2>
      </div>
      <Image
        src={"/assets/map.png"}
        width={600}
        height={600}
        alt="map with cities"
        className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
      />
    </div>
  );
};
export default Map;
/*
  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
*/

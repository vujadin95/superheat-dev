import BackgroundImage from "../components/Home/BackgroundImage";

const NasaPrica = () => {
  return (
    <section>
      <div className="relative w-full h-[500px] flex items-center">
        <BackgroundImage imagePath="/assets/nasa-prica.jpg" altText="o nama" />
        <div className="z-10 max-w-[1240px] w-full mx-auto bg-darkColor/20 text-lightColor">
          <h2 className="text-6xl text-center font-semibold leading-normal drop-shadow-2xl">
            Činimo vaš biznis efikasijim.
          </h2>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default NasaPrica;

// "use client";
import Brand from "./Brand";

const Brands = () => {
  const brands = [
    {
      id: 1,
      path: "",
      brandName: "Schneider",
      img: "/assets/brands/schneider.png",
    },
    {
      id: 2,
      path: "",
      brandName: "Pego",
      img: "/assets/brands/pego.png",
    },
    {
      id: 3,
      path: "",
      brandName: "ABB",
      img: "/assets/brands/abb.png",
    },
    {
      id: 4,
      path: "",
      brandName: "Danfoss",
      img: "/assets/brands/danfoss.png",
    },
    { id: 5, path: "", brandName: "Alco", img: "/assets/brands/alco.png" },
    { id: 6, path: "", brandName: "Carel", img: "/assets/brands/carel.png" },
    { id: 7, path: "", brandName: "Dixell", img: "/assets/brands/dixell.png" },
  ];

  return (
    <section className="flex gap-5 flex-wrap items-center justify-center bg-primary min-h-[500px] px-5">
      {brands.map((brand) => (
        <Brand
          key={brand.id}
          path={brand.path}
          img={brand.img}
          brandName={brand.brandName}
        />
      ))}
    </section>
  );
};
export default Brands;

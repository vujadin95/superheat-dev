import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Superheat | O Nama",
  description: "Evo nesto o nama",
};

const ONama = () => {
  const t = useTranslations("AboutUsPage");
  return (
    <>
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        {/* add md:w-[40%] if you want image */}
        <div className="w-[100%] text-base">
          <p className="pb-4 md:pb-6">{t("ourStory.paragraph1")}</p>
          <p className="pb-4 md:pb-6">{t("ourStory.paragraph2")}</p>
          <p className="pb-4 md:pb-6">{t("ourStory.paragraph3")}</p>
        </div>
        {/* <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/hvac-c.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div> */}
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] text-left md:text-right text-base">
            <p className="pb-4 md:pb-8">
              {t("foundationAndFirstSteps.paragraph1")}
            </p>
            <p className="pb-4 md:pb-8">
              {t("foundationAndFirstSteps.paragraph2")}
            </p>
            <p className="pb-4 md:pb-8">
              {t("foundationAndFirstSteps.paragraph3")}
            </p>
            <p className="pb-4 md:pb-8">
              {t("foundationAndFirstSteps.paragraph4")}
            </p>
          </div>
          {/* <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/nasa-prica.jpg"
              alt=""
              className="rounded-sm w-full object-cover shadow-xl"
            />
          </div> */}
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        <div className="w-[100%]">
          <p className="pb-4 md:pb-8">{t("businessPolicy.paragraph1")}</p>
          <p className="pb-4 md:pb-8">{t("businessPolicy.list")}</p>
          <li className="pb-4 md:pb-8">{t("businessPolicy.listItem1")}</li>
          <li className="pb-4 md:pb-8">{t("businessPolicy.listItem2")}</li>
          <p className="pb-4 md:pb-8">{t("businessPolicy.paragraph2")}</p>
          <p className="pb-4 md:pb-8">{t("businessPolicy.paragraph3")}</p>
        </div>
        {/* <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/engineer.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div> */}
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] md:w-[40%] text-left md:text-right">
            <p>
              Možemo se pohvaliti učešćem na mnogobrojnim uspešno izvedenim
              projektima, internacionalnim iskustvom a posebno ističemo naš
              istraživačko-razvojni sektor.
            </p>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/izveden-projekat.jpg"
              alt=""
              className="rounded-sm w-full shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 max-h-[600px] gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        <div className="w-[100%] md:w-[40%]">
          <h2 className="">
            Razvijamo nestandardna rešenja i aplikacije za sisteme hlađenja. U
            njih kroz softvere integrišemo naše iskustvo i znanje i na taj način
            ostvarujemo znatne uštede u potrošnji električne energije i emisiji
            CO2.
          </h2>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/analiza-strujanja.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div>
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 max-h-[600px] gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] md:w-[40%] text-left md:text-right">
            <p>
              Dovodimo opremu u idealne uslove rada čime produžavamo njen radni
              vek, neprekidno vršimo SCADA monitoring svih parametara sistema a
              na taj način i dalje pratimo
              <span className="text-red-500">„ŠTA MOŽE BITI BOLJE?“</span>.
            </p>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/scada.png"
              alt=""
              className="rounded-sm w-full shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default ONama;

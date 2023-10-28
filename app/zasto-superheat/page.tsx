import Chiller from "../components/Charts/Chiller";
import DirektnaExpanzija from "../components/Charts/DirektnaExpanzija";

const ZastoSuperheat = () => {
  return (
    <>
      <div>
        <section className="max-w-[1240px] mx-auto px-3 sm:px-5 text-base sm:text-xl md:text-2xl font-medium py-16">
          <h2 className="text-4xl md:text-6xl font-bold text-left text-red-500">
            ZATO ŠTO...
          </h2>
          <div className="w-full flex flex-wrap justify-center my-10 md:my-16 py-4 gap-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Ostvarujemo uštede u potrošnji struje i do 35%</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Ubrzavamo proces zamrzavanja</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Nudimo rešenja za nestandardne zahteve</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Naša rešenja se mogu primeniti na bilo koji rashladni sistem</p>
            </div>
          </div>

          <div>
            <DirektnaExpanzija />
          </div>

          <div className="w-full flex flex-wrap justify-center my-10 md:my-16 py-4 gap-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Naša rešenja se mogu primeniti na bilo koji rashladni sistem</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Produžavamo životni vek rashladnih sistema</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Obezbeđujemo potpuno automatizovan rad</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Vršimo SCADA monitoring rashladnih sistema</p>
            </div>
          </div>

          <div>
            <Chiller />
          </div>
          <div className="w-full flex flex-wrap justify-center my-10 md:my-16 py-4 gap-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Podižemo bezbednost rashladnih sistema</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Eliminišemo mogućnosti iznenadnog zastoja (SCADA)</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-sm shadow-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700/20 cursor-pointer hover:scale-105 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-600/20 ">
              <p>Konstantno tragamo za odgovorom na pitanje: ŠTA MOŽE BITI BOLJE?</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ZastoSuperheat;

"use client";
import { quotations } from "@/app/data/quotation";
import Quote from "./Quote";
const QuotationSection = () => {
  return (
    <section className=" h-[450px] sm:h-[530px] overflow-hidden px-3 sm:px-5 ">
      <div className="max-w-[1240px] h-full mx-auto w-full flex items-center justify-center">
        <Quote quotes={quotations} />
      </div>
    </section>
  );
};
export default QuotationSection;

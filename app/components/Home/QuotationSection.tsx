"use client";
import { quotations } from "@/app/data/quotation";
import Quote from "./Quote";
import QuoteTest from "./QuoteTest";
const QuotationSection = () => {
  return (
    <section className=" h-[530px] max-w-[1240px] mx-auto flex items-center justify-center  overflow-hidden px-5 ">
      <Quote quotes={quotations} />
      {/* <QuoteTest /> */}
    </section>
  );
};
export default QuotationSection;

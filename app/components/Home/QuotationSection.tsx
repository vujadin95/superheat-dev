"use client";
import { quotations } from "@/app/data/quotation";
import Quote from "./Quote";
import QuoteTest from "./QuoteTest";
const QuotationSection = () => {
  return (
    <section className="h-[530px] overflow-hidden px-5 ">
      <div className="max-w-[1240px] h-full mx-auto w-full flex items-center justify-center  ">
        <Quote quotes={quotations} />
      </div>
      {/* <QuoteTest /> */}
    </section>
  );
};
export default QuotationSection;
//bg-darkColor/10 dark:bg-lightColor/10

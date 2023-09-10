"use client";
import { quotations } from "@/app/data/quotation";
import Quote from "./Quote";
const QuotationSection = () => {
  return (
    <section className="h-[400px] max-w-[1240px] mx-auto flex items-center justify-center text-primary overflow-hidden px-5">
      <Quote quotes={quotations} />
    </section>
  );
};
export default QuotationSection;

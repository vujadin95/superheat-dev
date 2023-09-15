import { useState, useEffect } from "react";
import "./quoteAnimation.css";

interface QuoteProp {
  quotes: string[];
}

const FADE_IN_INTERVAL = 10000;
const FADE_OUT_INTERVAL = FADE_IN_INTERVAL - 1000;
const CHANGE_QUOTE_INTERVAL = FADE_IN_INTERVAL;

const Quote = ({ quotes }: QuoteProp) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeInInterval = setInterval(() => {
      setFadeOut(false);
      setFadeIn(true);
    }, FADE_IN_INTERVAL);

    const fadeOutInterval = setInterval(() => {
      setFadeIn(false);
      setFadeOut(true);
    }, FADE_OUT_INTERVAL);

    return () => {
      clearInterval(fadeInInterval);
      clearInterval(fadeOutInterval);
    };
  }, [quoteIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quoteIndex >= quotes.length - 1) {
        setQuoteIndex(0);
      } else {
        setQuoteIndex((prevQuote) => prevQuote + 1);
      }
    }, CHANGE_QUOTE_INTERVAL);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  return (
    <div
      className={`text-center font-[500] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:max-w-[80%] rounded-md bg-zinc-200/90 dark:bg-zinc-600/90 dark:text-lightColor text-darkColor ${
        fadeIn ? "fade-in" : fadeOut ? "fade-out" : ""
      }`}
    >
      <q className=" sm:text-2xl md:text-3xl block drop-shadow-2xl px-5 sm:px-10 py-5">{`${quotes[quoteIndex]}`}</q>
    </div>
  );
};
export default Quote;

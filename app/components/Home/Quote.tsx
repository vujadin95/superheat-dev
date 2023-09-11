import { useState, useEffect } from "react";
import "./quoteAnimation.css";

interface QuoteProp {
  quotes: string[];
}

const FADE_IN_INTERVAL = 6000;
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
      className={`text-center ${
        fadeIn ? "fade-in" : fadeOut ? "fade-out" : ""
      }`}
    >
      <q className="text-4xl drop-shadow-2xl italic">{`${quotes[quoteIndex]}`}</q>
    </div>
  );
};
export default Quote;

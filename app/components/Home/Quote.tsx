import { useState, useEffect } from "react";
import "./quoteAnimation.css";
interface QuoteProp {
  quotes: string[];
}
const FADE_INTERVAL_MS = 3000;
const CHANGE_QUOTE_INTERVAL = FADE_INTERVAL_MS * 2;

const Quote = ({ quotes }: QuoteProp) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    setTimeout(() => {}, 3000);
    const fadeInterval = setInterval(() => {
      fade === "fade-in" ? setFade("fade-out") : setFade("fade-in");
    }, FADE_INTERVAL_MS);
    return () => {
      clearInterval(fadeInterval);
    };
  }, [fade]);

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
    <div className={fade}>
      <q className="text-3xl">{`${quotes[quoteIndex]}`}</q>
    </div>
  );
};
export default Quote;

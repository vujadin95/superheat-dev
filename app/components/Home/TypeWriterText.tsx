"use client";
import TypewriterComponent from "typewriter-effect";
import { writtableStrings } from "@/app/data/heroWrittableStrings";

const TypeWriterText = () => {
  return (
    <div className="max-w-[650px] text-4xl text-neutral drop-shadow-2xl font-semibold tracking-wide leading-snug">
      <TypewriterComponent
        options={{
          strings: writtableStrings,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
};
export default TypeWriterText;

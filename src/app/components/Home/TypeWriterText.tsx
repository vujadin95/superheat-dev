"use client";
import TypewriterComponent from "typewriter-effect";

interface TypeWriterTextProps {
  writtableStrings: string[]
}

const TypeWriterText = ({ writtableStrings }: TypeWriterTextProps) => {

  return (
    <div className="max-w-[650px] text-2xl md:text-4xl text-[#FEFEFA] drop-shadow-2xl font-semibold tracking-wide leading-snug">
      <TypewriterComponent
        options={{
          strings: writtableStrings,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 40,
        }}
      />
    </div>
  );
};
export default TypeWriterText;

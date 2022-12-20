import React from "react";
import { PrimaryButton } from "../../components";

function AboutHero() {
  return (
    <div className="h-full relative px-4 py-32">
      <div className="flex flex-col">
        <p className="text-secondary text-sm font-bold font-mono">
          Hi, my name is{" "}
        </p>
        <h1 className="text-5xl max-lg:text-3xl font-bold text-third leading-snug	">
          Ankur
        </h1>
        <h2 className="text-5xl max-lg:text-3xl font-bold text-third/80 leading-snug">
          I build things for the web.
        </h2>
        <p className="text-lg max-lg:text-base leading-snug text-third w-[600px] max-lg:w-[450px] max-md:w-full my-6 ">
          I’m a frontend engineer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <div className="flex flex-col items-start">
          <PrimaryButton
            className="bg-secondary/80 hover:bg-secondary/100"
            name="Say Hello"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

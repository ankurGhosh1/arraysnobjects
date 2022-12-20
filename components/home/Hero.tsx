import React from "react";
import { PrimaryButton } from "../index";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-between py-24 max-md:flex-col px-4 gap-3">
      <div className="flex flex-col gap-5 max-lg:grow">
        <h1 className="text-5xl max-lg:text-3xl font-bold text-third leading-snug	">
          We specialize in <br />
          <span className="text-secondary">creating & designing</span> <br />
          websites!
        </h1>
        <p className="text-lg max-lg:text-base leading-snug text-third w-[500px] max-lg:w-[350px] max-md:w-full">
          Our goal is to help businesses and organizations establish a strong
          online presence and reach their target audience through the use of
          effective web design and development strategies.
        </p>
        <div className="flex flex-col items-start">
          <PrimaryButton className="bg-secondary/80 hover:bg-secondary/100" />
          <span className="text-xs text-third pt-1">
            We never share our data.
          </span>
        </div>
      </div>
      <div className="max-lg:grow xl:w-[500px] xl:h-[500px]">
        <Image
          src="/ux.gif"
          alt="banner"
          className="h-full w-full max-md:pt-5"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
}

export default Hero;

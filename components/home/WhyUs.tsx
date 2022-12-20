import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../index";
import useScreenSize from "../../hooks/useScreenSize";

function WhyUs() {
  const images = ["/webdev1.jpg", "/webdev2.jpg", "/webdev3.jpg"];
  const match = useScreenSize("768px");

  function randomImage(images: string[]) {
    const image = images[Math.floor(Math.random() * images.length)];
    // console.log(Math.floor(Math.random() * images.length));
    return (
      <Image
        src={image}
        height={150}
        width={150}
        alt="webdev1"
        className="max-md:w-full flex-1"
      />
    );
  }

  return (
    <div className="pt-16 pb-4 px-4">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl text-center font-bold text-third">
          Why <span className="text-secondary">Us?</span>
        </h1>
        <div>
          <Image src="/whyus1.png" width={550} height={400} alt="why-us" />
        </div>
        <p className="text-center text-lg max-lg:text-base text-third w-1/2 max-md:w-full">
          Our team of experienced professionals is here to take on the challenge
          and get the job done efficiently and effectively. With our skills and
          expertise, you can trust that we&apos;ll handle everything with care
          and attention to detail. So go ahead and sit back, relax, and let us
          handle the hard work for you.
        </p>
        <PrimaryButton className="bg-secondary/80 hover:bg-secondary/100" />
      </div>
      <div className="py-24 flex flex-col gap-16">
        <h1 className="text-4xl text-center font-bold text-third">
          <span className="text-secondary">Pixel</span> Perfect Design
        </h1>

        <div className="flex items-center justify-center max-md:flex-col gap-4">
          {match ? (
            randomImage(images)
          ) : (
            <React.Fragment>
              <Image
                src="/webdev1.jpg"
                height={150}
                width={150}
                alt="webdev1"
                className="max-md:w-full flex-1"
              />
              <Image
                src="/webdev2.jpg"
                height={150}
                width={150}
                alt="webdev2"
                className="max-md:w-full flex-1"
              />
              <Image
                src="/webdev3.jpg"
                height={150}
                width={150}
                alt="webdev3 "
                className="max-md:w-full flex-1"
              />
            </React.Fragment>
          )}
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-lg max-lg:text-base text-third w-1/2 max-md:w-full">
            We pay close attention to details such as layout, typography, color,
            and imagery, and work to ensure that all elements of the interface
            align perfectly with the design specifications. This may involve
            using design tools to measure and align elements to specific
            coordinates, and making adjustments as needed to achieve the desired
            level of precision.
          </p>
          {/* <PrimaryButton className="bg-secondary/80 hover:bg-secondary/100" /> */}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <React.Fragment>
      <h2 className="text-4xl font-bold text-third px-4">About Me.</h2>

      <div className="grid grid-cols-2 px-4 py-24 gap-10 justify-items-end justify-self-end max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-24">
        <div className="flex-1">
          <p className="text-lg max-lg:text-base leading-snug text-third pb-6">
            Hello! My name is Ankur and I enjoy creating things that live on the
            internet. My interest in web development started back in 2018 when I
            decided to try blogging using WordPress — turns out hacking together
            a custom share button taught me a lot about HTML & CSS!
          </p>
          <p className="text-lg max-lg:text-base leading-snug text-third pb-6">
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up - TeachEdison, and I also have previous experience as a
            digital marketer. My main focus these days is building websites,
            extensions and products for a variety of clients.
          </p>
          <ul>
            <span className="text-lg max-lg:text-base leading-snug text-third">
              Here are a few technologies I’ve been working with recently:
            </span>
            <div className="flex items-start gap-6 text-third pt-4">
              <div>
                <li className="font-mono">JavaScript(ES6+)</li>
                <li className="font-mono">TypeScript</li>
                <li className="font-mono">React</li>
              </div>
              <div>
                <li className="font-mono">Webflow</li>
                <li className="font-mono">Python</li>
                <li className="font-mono">Django</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="relative">
          <div className="h-96 w-96 border border-4 border-secondary rounded max-sm:w-64 max-sm:h-64">
            {" "}
          </div>
          <div className="h-96 w-96 absolute -top-8 -left-8 transition-all hover:-top-4 hover:-left-4  max-sm:w-64 max-sm:h-64">
            <div className="h-96 w-96 absolute bg-secondary/30 rounded z-20 -top-2 -left-2 hover:bg-secondary/10 max-md:none  max-sm:w-64 max-sm:h-64"></div>
            <Image
              src="/ankurG.jpeg"
              alt="Ankur"
              width={96}
              height={96}
              className="h-96 w-96 rounded absolute -top-2 -left-2  transition-all hover:-top-4 hover:-left-4  max-sm:w-64 max-sm:h-64"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;

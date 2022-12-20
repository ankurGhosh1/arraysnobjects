import React from "react";
import Image from "next/image";
import { flowData } from "./data";

function Flow() {
  return (
    <div className="px-4 py-16 flex flex-col gap-16">
      <div>
        <h2 className="text-4xl text-center font-bold text-third leading-snug">
          <span className="text-secondary">Design, Develop,</span> &{" "}
          <span className="text-secondary">Build</span> optimized
          <br />
          websites with our assistance.
        </h2>
      </div>

      <div className="flex items-start justify-between max-md:flex-col max-md:justify-center max-md:items-center gap-3">
        {flowData.map((data, i) => (
          <div
            key={i}
            className="bg-secondary/80 hover:bg-secondary/100 transition-all rounded p-3 flex-1 max-md:w-96 max-sm:w-full max-sm:mx-2"
          >
            <div className="flex items-center gap-3 pb-2">
              <div className="p-3 rounded-full bg-primary">
                <Image src={data.src} alt={data.title} height={30} width={30} />
              </div>
              <p className="text-third text-xl font-bold">{data.title}</p>
            </div>
            <div className="text-third text-base pt-5 lg:h-28">{data.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flow;

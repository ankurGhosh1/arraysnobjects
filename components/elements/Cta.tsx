import React from "react";
import { SecondaryButton } from "../index";

function Cta() {
  return (
    <div className="py-16 px-4 flex items-center justify-center flex-col gap-8">
      <h1 className="text-4xl text-center font-bold text-primary">
        Get a <span className="text-third">FREE</span> consultation
      </h1>
      <div>
        <SecondaryButton className="border border-secondary transition-background bg-primary hover:bg-third hover:border hover:border-primary rounded hover:text-primary" />
      </div>
    </div>
  );
}

export default Cta;

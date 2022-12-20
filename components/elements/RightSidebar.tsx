import React from "react";
import Image from "next/image";

function RightSidebar() {
  return (
    <div className="fixed bottom-0 xl:right-8 right-2 vertical-rl">
      <div className="flex items-center justify-center after:content[''] after:block after:h-16 after:bg-third after:w-px gap-6 after:right-0.5 after:relative">
        <a href="mailto:ankurcool.kumar@gmail.com">
          <p className="text-third text-sm b-3 hover:-translate-y-3 hover:text-fifth hover:transition-all hover:delay200 font-mono cursor-pointer">
            ankurcool.kumar@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
}

export default RightSidebar;

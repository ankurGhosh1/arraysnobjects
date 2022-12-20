import React from "react";

interface IProps {
  name?: string;
  url?: string;
  className?: string;
}

function SecondaryButton(props: IProps) {
  return (
    <div className="relative">
      <span className="flex h-3 w-3 absolute -right-1 -top-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-third opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      <a
        href={`${props.url ? props.url : "/contact"}`}
        className="no-underline"
      >
        <button
          className={`bg-primary px-16 py-4 text-third text-xl font-bold rounded ${props.className}`}
        >
          {props.name ? props.name : "Contact Us"}
        </button>
      </a>
    </div>
  );
}

export default SecondaryButton;

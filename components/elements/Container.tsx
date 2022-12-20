import React from "react";

interface Container {
  children: React.ReactNode;
  className?: string;
}

function Container(props: Container) {
  const { children, className = "" } = props;
  return (
    <div className={`container mx-auto lg:px-4 lg:w-[1200px] ${className}`}>
      {children}
    </div>
  );
}

export default Container;

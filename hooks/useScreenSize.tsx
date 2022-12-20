import React, { useState, useEffect } from "react";

function useScreenSize(screenSize: string) {
  const [mediaSize, setMediaSize] = useState(false);

  useEffect(() => {
    const size = window.matchMedia(`(max-width:${screenSize})`);

    setMediaSize(size.matches);

    size.addEventListener("change", (e) => {
      setMediaSize(e.matches);
    });
  }, [mediaSize]);
  return mediaSize;
}

export default useScreenSize;

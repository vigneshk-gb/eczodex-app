import React, { useState, useEffect } from "react";

type WindowDimensions = {
  width: number;
  height: number;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;

import { useEffect, useState, useMemo } from "react";

export default function useDevice() {
  const [windowSize, setWindowSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    }
   
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useMemo(() => windowSize.width <= 575, [windowSize.width]);
  const isTablet = useMemo(() => windowSize.width <= 1050, [windowSize.width]);

  return {
    isMobile,
    isTablet,
  };
}
